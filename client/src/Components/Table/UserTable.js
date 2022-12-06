import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#242f9b",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export default function UserTable({ Users }) {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:3001/funderr//deleteuser/${id}`)
      .then((response) => {
        toast.success("User Deleted!", {
          position: toast.POSITION.TOP_LEFT,
        });
        setTimeout(() => {
          navigate("/AdminDashboard/AdminAllCampaigns");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <ToastContainer />
      {
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Role</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Users.map((user) => (
                <StyledTableRow key={Math.random()}>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell>{user.email}</StyledTableCell>
                  {user.role === "user" ? (
                    <StyledTableCell>
                      <PersonIcon />
                    </StyledTableCell>
                  ) : (
                    <StyledTableCell>
                      <AdminPanelSettingsIcon />
                    </StyledTableCell>
                  )}
                  <StyledTableCell>
                    {
                      <>
                        <StyledTableCell
                          onClick={() => {
                            if (user.role === "admin") {
                              toast.info("Cannot Delete Admin", {
                                position: toast.POSITION.TOP_LEFT,
                              });
                            } else {
                              handleDelete(user._id);
                            }
                          }}
                        >
                          <DeleteIcon sx={{ cursor: "pointer" }} />
                        </StyledTableCell>
                      </>
                    }
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </>
  );
}
