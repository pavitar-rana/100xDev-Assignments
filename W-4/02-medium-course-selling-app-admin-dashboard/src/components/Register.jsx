import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import Appbar from "./Appbar";
import axios from "axios";

/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div
        style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}
      >
        <Appbar></Appbar>

        <div
          style={{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant={"h6"}>
            Welcome to coursera. Sign up below
          </Typography>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card style={{ width: 400, padding: 20 }}>
            <h1>Register to the website</h1>
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
            <Button
              size={"large"}
              variant="contained"
              onClick={() => {
                let admin = {
                  username: email,
                  password,
                };

                axios
                  .post("http://localhost:3000/admin/signup", admin)
                  .then((resp) => {
                    let token = resp.data.token;
                    localStorage.setItem("token", token);
                  });
              }}
            >
              Sign Up
            </Button>
            <br />
            <br />
            Already a user? <a href="/login">Login</a>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Register;
