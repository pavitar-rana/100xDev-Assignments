import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import Appbar from "./Appbar";
/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
  const [email, setEmail] = React.useState("");
  //   Email - <input type={"text"} onChange={(e) => setEmail(e.target.value)} />;

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
          <Typography variant={"h6"}>Welcome Back. Sign In below</Typography>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card style={{ width: 400, padding: 20 }}>
            <h1>Login to the website</h1>
            <br />
            <TextField
              fullWidth={true}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(email);
              }}
            />
            <br />
            <br />
            <TextField
              fullWidth={true}
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <br />
            <br />
            <Button size={"large"} variant="contained">
              Sign In
            </Button>
            <br />
            <br />
            Not a user? <a href="/register">Log in</a>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Login;
