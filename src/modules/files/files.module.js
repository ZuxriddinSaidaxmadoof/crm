import { Router } from "express";
import { FileService } from "./files.service.js";
import { FileController } from "./files.controller.js";
import multer from "multer";
import path from "path";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, join(__dirname, "../../../uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage });

const fileService = new FileService();
const fileController = new FileController(fileService);

router.get("/", (req, res) => {
  fileController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  fileController.getOneById(req, res);
});

router.post("/", upload.single("media"), (req, res) => {
  fileController.create(req, res);
});

router.put("/:id",upload.single("media"), (req, res) => {
  fileController.update(req, res);
});

router.delete("/:id", (req, res) => {
  fileController.delete(req, res);
});

export default { router };
