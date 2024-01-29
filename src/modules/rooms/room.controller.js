import { ResData } from "../../common/resData.js";
import { RoomException } from "./exception/room.exception.js";
import { RoomSchema } from "./validation/room.schema.js";

export class RoomController {
  #roomService;
  constructor(roomService) {
    this.#roomService = roomService;
  }

  async getAll(req, res) {
    try {
      const resData = await this.#roomService.getAll();

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async getById(req, res) {
    try {
      const id = req.params?.id;

      const resData = await this.#roomService.getById(id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async create(req, res) {
    try {
      const dto = req.body[0];

      const validate = RoomSchema.validate(dto);

      if (validate.error) {
        throw new RoomException(validate.error.message);
      }

      const resData = await this.#roomService.create(dto);

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

      const validate = RoomSchema.validate(dto);

      if (validate.error) {
        throw new RoomException(validate.error.message);
      }

      const resData = await this.#roomService.update(dto, id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }

  async delete(req, res) {
    try {
      const id = req.params?.id;

      const resData = await this.#roomService.delete(id);

      res.status(resData.statusCode).json(resData);
    } catch (error) {
      const resData = new ResData(error.message, error.statusCode, null, error);

      res.status(resData.statusCode).json(resData);
    }
  }
}
