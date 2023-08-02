import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import Appbar from "./Appbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              Register to the website
            </h1>
          </center>
          <br />
          <TextField
            fullWidth={true}
            id="username"
            label="Email"
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            fullWidth={true}
            id="password"
            label="Password"
            variant="outlined"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <center>
            <Button
              size={"large"}
              variant="contained"
              onClick={() => {
                const admin = {
                  username: email,
                  password,
                };

                axios
                  .post("http://localhost:3000/admin/signup", { admin })
                  .then((resp) => {
                    let token = resp.data.token;
                    localStorage.setItem("token", token);
                  });
                window.location.href = "/";
              }}
            >
              Sign Up
            </Button>
            <br />
            <br />
            <Typography variant="body1">
              Already a user?{" "}
              <span
                style={{ color: "blue", textDecoration: "underline" }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </span>
            </Typography>
          </center>
        </Card>
      </div>
    </div>
  );
}

export default Register;
