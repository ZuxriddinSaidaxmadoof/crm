import { Router } from "express";
import { EmployersService } from "./employers.service.js";
import { EmployersController } from "./employers.controller.js";
import { FileService } from './../files/files.service.js';

const router = Router();

const employersService = new EmployersService();
const fileService = new FileService()
const employersController = new EmployersController(employersService, fileService);

router.get("/", (req, res) => {
  employersController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  console.log(2);
  employersController.getOneById(req, res);
});

router.post("/", (req, res) => {
  employersController.create(req, res);
});

router.put("/:id", (req, res) => {
  employersController.update(req, res);
});

router.delete("/:id", (req, res) => {
  employersController.delete(req, res);
});

export default { router };
