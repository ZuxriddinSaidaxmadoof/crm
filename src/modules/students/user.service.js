import { ResData } from "../../common/resData.js";
import { UserRepository } from "./user.repository.js";
import { BrandEntity } from "./entity/user.entity.js"
import { FileNotFoundException, UserNotFoundException } from "./exception/user.exception.js"

export class UserService {
  #repository;
  constructor() {
    this.#repository = new UserRepository();
  }

  async getAll() {
    const foundAll = await this.#repository.findAll();

    const resData = new ResData("All students", 200, foundAll);

    return resData;
  }

  async getByLimit(limit, offset) {
    const foundAll = await this.#repository.findByPage(limit, offset);

    const resData = new ResData("Students by pagination", 200, foundAll);

    return resData;
  }


  async getOne(id) {
    const foundAll = await this.#repository.findOneById(id);

    const resData = new ResData("One student by id", 200, foundAll);
    if(!resData.data){
      throw new UserNotFoundException();
    }

    return resData;
  }

  async create(dto) {
    const foundOne = await this.#repository.findOneFileById(dto.fileId);
    if(!foundOne){
      throw new FileNotFoundException();
    }
    
    const newBrand = new BrandEntity(dto);
    const foundAll = await this.#repository.create(newBrand);
    const resData = new ResData("Student created", 201, foundAll);

    return resData;
  }

  async update(dto, id) {
    const check = await this.#repository.findOneById(id);
    const foundOne = await this.#repository.findOneFileById(dto.fileId);

    if(!check){
      throw new UserNotFoundException();
    }
    if(!foundOne){
      throw new FileNotFoundException();
    }
    const newBrand = new BrandEntity(dto);
    const foundAll = await this.#repository.update(newBrand, id);
    const resData = new ResData("Student updated", 201, foundAll);

    return resData;
  }

  async delete(id) {
    const check = await this.#repository.findOneById(id);
    if(!check){
      throw new UserNotFoundException();
    }
    const foundAll = await this.#repository.delete(id);
    const resData = new ResData("Student deleted", 203, foundAll);
    return resData;
  }
}
