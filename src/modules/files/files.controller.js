import { ResData } from "../../common/resData.js";

export class FileController {
  #fileService;
  constructor(fileService) {
    this.#fileService = fileService;
  }

  async getAll(req, res) {
    try {
      const resData = await this.#fileService.getAll();

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async getOneById(req, res) {
    try {
      const id = req.params?.id;

      const resData = await this.#fileService.getOneById(id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async create(req, res) {
    try {
      const dto = req.file;

      const resData = await this.#fileService.create(dto);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async update(req, res) {
    try {
      const dto = req.file;
      const id = Number(req.params?.id);

      const data = {
        original_name: dto.originalname,
        path: dto.path,
        size: dto.size,
        mime_type: dto.mimetype,
        id: id,
      };

      const resData = await this.#fileService.update(data);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async delete(req, res) {
    try {
      const id = req.params?.id;

      const resData = await this.#fileService.delete(id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }
}
