import { Router } from "express";
import brand from "./brand/brand.module.js";

const router = Router();

router.use("/brand", brand.router);


export default { router };
