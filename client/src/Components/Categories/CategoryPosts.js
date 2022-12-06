import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { CircularProgress } from "@mui/material";
import CategoryCard from "./CategoryCard";

const CategoryPosts = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  console.log("Category : ", id);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/funderr/categoryPost/${id}`)
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      });
  }, []);

  console.log("CategoryPosts: ", posts);

  if (loading) {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </div>
      </>
    );
  }

  if (posts.categoryPost.length === 0) {
    return (
      <>
        <Navbar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            style={{
              color: "#242f9b",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {`NO CAMPAIGNS OF CATEGORY: ${id}`}
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div
        style={{
          marginLeft: "4rem",
        }}
      >
        <Grid
          container
          spacing={2}
          paddingLeft={2}
          paddingBottom={4}
          paddingTop={2}
        >
          {posts.categoryPost.map((allposts) => (
            <Grid item xs={6} md={6} lg={4} key={Math.random()}>
              <CategoryCard posts={allposts} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default CategoryPosts;
