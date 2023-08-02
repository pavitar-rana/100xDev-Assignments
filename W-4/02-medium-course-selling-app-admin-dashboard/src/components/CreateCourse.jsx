import React, { useState, useSyncExternalStore } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card } from "@mui/material";
import axios from "axios";
import Appbar from "./Appbar";

function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  return (
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
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      ></div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: 400, padding: 20 }}>
          <center>
            <h1 style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}>
              Add Course Details below
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
                const newCourse = {
                  title,
                  description,
                  image,
                };
                const headers = {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                };

                axios
                  .post("http://localhost:3000/admin/courses", newCourse, {
                    headers,
                  })
                  .then((resp) => {
                    console.log(resp.data);
                  });
              }}
            >
              Create Course
            </Button>
            <br />
            <br />
          </center>
        </Card>
      </div>
    </div>
  );
}
export default CreateCourse;
