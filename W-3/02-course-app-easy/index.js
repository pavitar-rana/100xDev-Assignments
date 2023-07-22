const express = require("express");
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];
let id = 0;
let purchasedCourses = [];

function adminAuthentication(req, res, next) {
  const { username, password } = req.headers;
  const admin = ADMINS.find(
    (ad) => ad.username === username && ad.password === password
  );
  if (admin) {
    next();
  } else {
    res.status(403).json({ message: "Admin authentication failed" });
  }
}

function userAuthentication(req, res, next) {
  const { username, password } = req.headers;
  const user = USERS.find(
    (us) => us.username === username && us.password === password
  );
  if (user) {
    next();
  } else {
    res.status(403).json({ message: "User authentication failed" });
  }
}

// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  const newadmin = req.body;
  const currentAdmin = ADMINS.find(
    (admin) => admin.username === newadmin.username
  );
  if (currentAdmin) {
    res.status(403).json({ message: "Admin already exist" });
  } else {
    ADMINS.push(newadmin);
    res.json({ message: "Admin created successfully" });
  }
});

app.post("/admin/login", adminAuthentication, (req, res) => {
  // logic to log in admin
  res.json({ message: "Logged in successfully" });
});

app.post("/admin/courses", adminAuthentication, (req, res) => {
  // logic to create a course
  id++;
  const course = req.body;
  course.id = id;

  COURSES.push(course);
  res.json({ message: "Course created successfully", courseId: id });
});

app.put("/admin/courses/:courseId", adminAuthentication, (req, res) => {
  // logic to edit a course
  const courseId = parseInt(req.params.courseId);
  let course = COURSES.find((c) => c.id === courseId);

  console.log(course);
  if (course) {
    Object.assign(course, req.body);
    res.json({ message: "Course updated successfully" });
  } else {
    res.status(404).send("Course does't exist");
  }
});

app.get("/admin/courses", adminAuthentication, (req, res) => {
  // logic to get all courses

  res.json({ courses: COURSES });
});

// User routes
app.post("/users/signup", (req, res) => {
  // logic to sign up user
  const newUser = req.body;
  const currentUser = USERS.find((user) => user.username === newUser.username);
  if (currentUser) {
    res.status(403).json({ message: "User already exist" });
  } else {
    USERS.push(newUser);
    res.json({ message: "User created successfully" });
  }
});

app.post("/users/login", userAuthentication, (req, res) => {
  // logic to log in user
  res.json({ message: "Logged in successfully" });
});

app.get("/users/courses", userAuthentication, (req, res) => {
  // logic to list all courses
  res.json({ courses: COURSES });
});

app.post("/users/courses/:courseId", userAuthentication, (req, res) => {
  // logic to purchase a course
  const courseId = parseInt(req.params.courseId);

  let courseIndex = COURSES.findIndex((course) => course.id === courseId);
  purchasedCourses.push(COURSES[courseIndex]);
  res.json({ message: "Course purchased successfully" });
});

app.get("/users/purchasedCourses", userAuthentication, (req, res) => {
  // logic to view purchased courses
  res.json({ purchasedCourses });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
