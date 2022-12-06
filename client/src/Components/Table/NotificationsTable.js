import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckIcon from "@mui/icons-material/Check";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
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
  const markAsRead = async (id) => {
    await axios
      .patch(`http://localhost:3001/funderr/markasread/${id}`)
      .then((response) => {
        toast.success("Marked as read!", {
          position: toast.POSITION.TOP_LEFT,
        });
        setTimeout(() => {
          navigate("/UserDashboard/AllCampaigns");
        }, 2000);
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
                <StyledTableCell>Notification</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Users.map((user) => (
                <StyledTableRow key={Math.random()}>
                  <StyledTableCell component="th" scope="row">
                    {user.message}
                  </StyledTableCell>
                  <StyledTableCell>
                    {user.status === "unread" ? (
                      <>
                        <MarkAsUnreadIcon />
                      </>
                    ) : (
                      <CheckIcon />
                    )}
                  </StyledTableCell>
                  {user.status === "unread" ? (
                    <StyledTableCell
                      onClick={() => markAsRead(user._id)}
                      sx={{ cursor: "pointer" }}
                    >
                      <button
                        className="btn"
                        style={{
                          backgroundColor: "#242F9B",
                          color: "white",
                        }}
                      >
                        Mark as Read
                      </button>
                    </StyledTableCell>
                  ) : null}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </>
  );
}
