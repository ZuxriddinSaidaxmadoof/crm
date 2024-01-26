import { Router } from "express";
import { UserController } from "./user.controller.js";
import { UserService } from "./user.service.js";

const router = Router();

const userService = new UserService();
const userController = new UserController(userService);

router.get("/:id", (req, res) => {
  userController.getOneById(req, res);
});
router.get("/", (req, res) => {
  userController.getPaginationStudents(req, res);
});
router.post("/", (req, res) => {
  userController.createUser(req, res);
});
router.put("/:id", (req, res) => {
  userController.updateBrand(req, res);
});
router.delete("/:id", (req, res) => {
  userController.deleteBrand(req, res);
});
export default { router };
