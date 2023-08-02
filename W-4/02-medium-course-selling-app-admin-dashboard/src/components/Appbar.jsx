import { Button, Typography, dividerClasses } from "@mui/material";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Appbar() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;

  const headers = {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };

  useEffect(() => {
    axios.get("http://localhost:3000/admin/me", { headers }).then((resp) => {
      setUsername(resp.data.username);
      setLoading(false);
    });
  }, []);
  if (username) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: 10,
          paddingLeft: 10,
          paddingTop: 6,
        }}
      >
        <div>
          <Typography variant={"h6"}>Coursera</Typography>
        </div>
        {loading ? (
          <div></div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              fontSize={17}
              style={{ marginRight: "10px" }}
            >
              {username}
            </Typography>
            {currentRoute === "/addcourse" ? (
              <Button
                size={"large"}
                variant="contained"
                onClick={() => {
                  navigate("/courses");
                }}
              >
                Show Courses
              </Button>
            ) : (
              <Button
                size={"large"}
                variant="contained"
                onClick={() => {
                  navigate("/addcourse");
                }}
              >
                Add Course
              </Button>
            )}

            <Button
              style={{ marginLeft: 10 }}
              size={"large"}
              variant="contained"
              onClick={() => {
                localStorage.setItem("token", null);
                window.location.href = "/";
              }}
            >
              Log Out
            </Button>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: 10,
          paddingLeft: 10,
          paddingTop: 6,
        }}
      >
        <div>
          <Typography variant={"h6"}>Coursera</Typography>
        </div>

        <div>
          <Button
            size={"large"}
            style={{ marginRight: 5 }}
            variant="contained"
            onClick={() => {
              navigate("/register");
            }}
          >
            Signup
          </Button>

          <Button
            size={"large"}
            variant="contained"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </Button>
        </div>
      </div>
    );
  }
}

export default Appbar;
