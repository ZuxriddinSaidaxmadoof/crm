import { Router } from "express";
import { CoursesService } from "./courses.service.js";
import { CoursesController } from "./courses.controller.js";
import { EmployersService } from './../employers/employers.service.js';

const router = Router();

const coursesService = new CoursesService();
const employersService = new EmployersService()
const coursesController = new CoursesController(coursesService, employersService);

router.get("/", (req, res) => {
  coursesController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  coursesController.getOneById(req, res);
});

router.post("/", (req, res) => {
  coursesController.create(req, res);
});

router.put("/:id", (req, res) => {
  coursesController.update(req, res);
});

router.delete("/:id", (req, res) => {
  coursesController.delete(req, res);
});
export default { router };
