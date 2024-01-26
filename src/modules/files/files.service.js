import { ResData } from "../../common/resData.js";
import { FileEntity } from "./entity/file.entity.js";
import { FileNotFoundException } from "./exception/file.exception.js";
import { FileRepository } from "./files.repository.js";
import fs from "fs/promises";

export class FileService {
  #repository;
  constructor() {
    this.#repository = new FileRepository();
  }

  async getAll() {
    const files = await this.#repository.findAll();

    const resData = new ResData("get all files", 200, files);

    return resData;
  }

  async getOneById(id) {
    const foundId = await this.#repository.findOneById(id);

    if (!foundId) {
      throw new FileNotFoundException();
    }

    const resData = new ResData("get one by id file", 201, foundId);

    return resData;
  }

  async create(dto) {
    const newFile = new FileEntity(
      dto.originalname,
      dto.path,
      dto.size,
      dto.mimetype
    );

    const file = await this.#repository.create(newFile);

    const resData = new ResData("create file", 200, file);

    return resData;
  }

  async update(data) {
    const foundId = await this.#repository.findOneById(data.id);

    if (!foundId) {
      throw new FileNotFoundException();
    }

    if (foundId.path) {
      fs.unlink(foundId.path);
    }
    
    const file = await this.#repository.update(data);

    const resData = new ResData("update file", 201, file);

    return resData;
  }

  async delete(id) {
    const foundId = await this.#repository.findOneById(id);

    if (!foundId) {
      throw new FileNotFoundException();
    }

    if (foundId.path) {
      fs.unlink(foundId.path);
    }

    const deleteFile = await this.#repository.delete(id);

    const resData = new ResData("deleted files", 201, foundId);

    return resData;
  }
}
