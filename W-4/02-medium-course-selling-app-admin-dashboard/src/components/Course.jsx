/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Appbar from "./Appbar";

import { useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

function Course() {
  const setCourses = useSetRecoilState(coursesState);

  const { courseId } = useParams();

  const courseIdNum = parseInt(courseId);

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
        <Appbar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <ShowCourse courseIdNum={courseIdNum} />
          <UpdateCourse courseId={courseIdNum} />
        </div>
      </div>
    </>
  );
}
function ShowCourse({ courseIdNum }) {
  const courses = useRecoilValue(coursesState);
  var course;

  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id == courseIdNum) {
      course = courses[i];
    }
  }
  if (!course) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ marginRight: 20 }}>
      <Card
        style={{
          width: 450,
          height: 380,
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, " +
            "rgba(0, 0, 0, 0.12) 0px -12px 30px, " +
            "rgba(0, 0, 0, 0.12) 0px 4px 6px, " +
            "rgba(0, 0, 0, 0.17) 0px 12px 13px, " +
            "rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <CardMedia
          sx={{
            height: 250,
            width: "auto",
            margin: 0.5,
          }}
          image={course.image}
          title={course.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {course.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
function UpdateCourse({ courseId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [courses, setCourses] = useRecoilState(coursesState);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          style={{
            width: 450,
            padding: 20,
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, " +
              "rgba(0, 0, 0, 0.12) 0px -12px 30px, " +
              "rgba(0, 0, 0, 0.12) 0px 4px 6px, " +
              "rgba(0, 0, 0, 0.17) 0px 12px 13px, " +
              "rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          <center>
            <h1 style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}>
              Update Course Details
            </h1>
          </center>
          <br />
          <TextField
            fullWidth={true}
            label="Title"
            variant="outlined"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            fullWidth={true}
            label="Description"
            variant="outlined"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            fullWidth={true}
            label="Image Link"
            variant="outlined"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <br />
          <br />

          <center>
            <Button
              size={"large"}
              variant="contained"
              onClick={() => {
                const updatedCourse = {
                  title,
                  description,
                  image,
                };
                const headers = {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                };
                axios
                  .put(
                    `http://localhost:3000/admin/courses/${courseId}`,
                    updatedCourse,
                    {
                      headers,
                    }
                  )
                  .then(() => {
                    var updatedCourses = [];
                    for (let i = 0; i < courses.length; i++) {
                      if (courses[i].id === courseId) {
                        updatedCourses.push({
                          id: courseId,
                          title,
                          description,
                          image,
                        });
                      } else {
                        updatedCourses.push(courses[i]);
                      }
                    }
                    setCourses(updatedCourses);
                  });
              }}
            >
              Update Course
            </Button>
            <br />
            <br />
          </center>
        </Card>
      </div>
    </div>
  );
}

export default Course;

const coursesState = atom({
  key: "coursesState",
  default: "",
});
