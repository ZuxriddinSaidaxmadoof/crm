import { ResData } from "../../common/resData.js";
import { CoursesException } from "./exception/courses.exception.js";
import { coursesSchema } from "./validation/courses.schema.js";
import { EmployersNotFoundException } from "../employers/exception/employers.exception.js";

export class CoursesController {
  #coursesService;
  #employersService;
  constructor(coursesService, employersService) {
    this.#coursesService = coursesService;
    this.#employersService = employersService;
  }

  async getAll(req, res) {
    try {
      const resData = await this.#coursesService.getAll();

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async getOneById(req, res) {
    try {
      const id = req.params?.id;

      const resData = await this.#coursesService.getOneById(id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async create(req, res) {
    try {
      const dto = req.body[0];

      const validate = coursesSchema.validate(dto);

      if (validate.error) {
        throw new CoursesException(validate.error.message);
      }

      const {data: checkEmployers} = await this.#employersService.getOneById(dto.instructor);

      if (!checkEmployers) {
        throw new EmployersNotFoundException()
      }

      const resData = await this.#coursesService.create(dto);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async update(req, res) {
    try {
      const dto = req.body[0];
      const id = req.params?.id;

      const data = {
        name: dto.name,
        description: dto.description,
        start_date: dto.startDate,
        end_date: dto.endDate,
        instructor: dto.instructor,
        id: id,
      };

      const validate = coursesSchema.validate();

      if (validate.error) {
        throw new CoursesException(validate.error.message);
      }

      const {data: checkEmployers} = await this.#employersService.getOneById(Number(data.instructor));

      if (!checkEmployers) {
        throw new EmployersNotFoundException()
      }

      const resData = await this.#coursesService.update(data);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async delete(req, res) {
    try {
      const id = req.params?.id;

      const resData = await this.#coursesService.delete(id);

      res.status(resData.statusCode || 200).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }
}
