import { Router } from "express";
import students from "./students/user.module.js";
import user from "./users/user.module.js";
import file from "./files/files.module.js";
import employers from "./employers/employers.module.js";
import courses from "./courses/courses.module.js"
import room from "./rooms/room.module.js"
import student_course from "./student_courses/student_course.module.js"

const router = Router();

router.use("/student", students.router);
router.use("/student-courses", student_course.router);
router.use("/user", user.router);
router.use("/file", file.router);
router.use("/employers", employers.router);
router.use("/courses", courses.router);
router.use("/room", room.router);

export default { router };
