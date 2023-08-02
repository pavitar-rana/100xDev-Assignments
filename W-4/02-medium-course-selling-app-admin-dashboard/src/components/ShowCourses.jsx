import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Navigate, json, useNavigate } from "react-router-dom";
import Appbar from "./Appbar";

function ShowCourses() {
  const [courses, setCourses] = useState([]);

  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/courses", { headers })
      .then((resp) => {
        setCourses(resp.data.courses);
      });
  }, []);

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#eeeeee",
        }}
      >
        <div>
          <Appbar />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {courses.map((course) => (
            <Course
              image={course.image}
              title={course.title}
              description={course.description}
              key={course.id}
              id={course.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function Course({ image, title, description, id }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        margin: 10,
      }}
    >
      <Card sx={{ maxWidth: 400 }} variant="outlined">
        <CardMedia
          sx={{
            height: 200,
            width: 250,
            margin: 0.5,
          }}
          image={image}
          title={title}
          onClick={() => {
            navigate(`/course/${id}`);
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" size="medium">
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ShowCourses;
