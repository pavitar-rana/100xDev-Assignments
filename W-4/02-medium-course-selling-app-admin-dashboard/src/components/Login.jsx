import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import Appbar from "./Appbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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
        ></div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card style={{ width: 400, padding: 20 }}>
            <center>
              <h1
                style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}
              >
                Login to the website
              </h1>
            </center>
            <br />
            <TextField
              fullWidth={true}
              id="outlined-basic"
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
              id="outlined-basic"
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
                  const headers = {
                    username: email,
                    password: password,
                  };
                  console.log(headers);
                  axios
                    .post("http://localhost:3000/admin/login", null, {
                      headers,
                    })
                    .then((resp) => {
                      let token = resp.data.token;
                      localStorage.setItem("token", token);
                      window.location.href = "/";
                    });
                }}
              >
                Log In
              </Button>
              <br />
              <br />
              <Typography variant="body1">
                Not a user?
                <span
                  style={{ color: "blue", textDecoration: "underline" }}
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Sign Up
                </span>
              </Typography>
            </center>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Login;
