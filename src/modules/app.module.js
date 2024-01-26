import { Router } from "express";
import brand from "./brand/brand.module.js";
import file from "./files/files.module.js"

const router = Router();

router.use("/brand", brand.router);
router.use("/file", file.router)


export default { router };
