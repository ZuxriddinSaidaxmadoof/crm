import { Router } from "express";
import { UserController } from "./school.controller.js";
import { UserService } from "./school.service.js";

const router = Router();

const userService = new UserService();
const userController = new UserController(userService);

router.get("/:id", (req, res) => {
  req.params.id;
  userController.getOneById(req, res);
});
router.get("/", (req, res) => {
  userController.getAll(req, res);
});
router.post("/", (req, res) => {
  userController.createBrand(req, res);
});
router.put("/:id", (req, res) => {
  userController.updateBrand(req, res);
});
router.delete("/:id", (req, res) => {
  userController.deleteBrand(req, res);
});
export default { router };
