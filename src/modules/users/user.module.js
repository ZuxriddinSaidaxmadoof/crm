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
  userController.getAll(req, res);
});
router.post("/register", (req, res) => {
  userController.createBrand(req, res);
});
router.post("/login", (req, res) => {
  userController.login(req, res);
});

router.post("/admin", (req, res) => {
  userController.createAdmin(req, res);
});
router.put("/:id", (req, res) => {
  userController.updateBrand(req, res);
});
router.delete("/:id", (req, res) => {
  userController.deleteBrand(req, res);
});

export default { router };
