import { Router } from "express";
import brand from "./brand/brand.module.js";
import students from "./students/user.module.js";
import user from "./users/user.module.js";
import file from "./files/files.module.js"
import employers from "./employers/employers.module.js"

const router = Router();

router.use("/brand", brand.router);
router.use("/student", students.router);
router.use("/user", user.router);
router.use("/file", file.router);
router.use("/employers", employers.router)

export default { router };
