import { Router } from "express";
import { UserController } from "./user.controller.js";
import { UserService } from "./user.service.js";

const router = Router();

const userService = new UserService();
const userController = new UserController(userService);

router.get("/", (req, res) => {
  userController.getAll(req, res);
});
router.get("/:id", (req, res) => {
  userController.getOneById(req, res);
});
router.post("/", (req, res) => {
  userController.createUser(req, res);
});
router.get("/", (req, res) => {
  userController.getAll(req, res);
});
router.get("/", (req, res) => {
  userController.getAll(req, res);
});

export default { router };
