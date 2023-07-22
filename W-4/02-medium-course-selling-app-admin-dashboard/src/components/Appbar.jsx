import { Button, Link, Typography } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";

function Appbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4,
      }}
    >
      <div>
        <Typography>Coursera</Typography>
      </div>
      <div
        style={{
          marginRight: 20,
        }}
      >
        <Link href={"/register"}>
          <Button size={"large"} variant="contained">
            Signup
          </Button>
        </Link>
        <Link href={"/login"}>
          <Button size={"large"} variant="contained">
            Log in
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Appbar;
