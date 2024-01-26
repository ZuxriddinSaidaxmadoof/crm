import { Router } from "express";
import brand from "./brand/brand.module.js";
import students from "./students/user.module.js";
import user from "./users/user.module.js";

const router = Router();

router.use("/brand", brand.router);
router.use("/student", students.router);
router.use("/user", user.router);



export default { router };
