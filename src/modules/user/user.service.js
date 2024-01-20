import { ResData } from "../../common/resData.js";
import { UserRepository } from "./user.repository.js";
import { UserEntity } from "./entity/user.entity.js"

export class UserService {
  #repository;
  constructor() {
    this.#repository = new UserRepository();
  }

  async getAll() {
    const foundAll = await this.#repository.findAll();

    const resData = new ResData("success login", 200, foundAll);

    return resData;
  }

  async getOne(id) {
    const foundAll = await this.#repository.findOneById(id);

    const resData = new ResData("One User by id", 200, foundAll);
    if(!resData.data){
      return new ResData("User not found", 404, null, null);
    }

    return resData;
  }

  async create(dto) {

    const newBrand = new UserEntity(dto);
    const foundAll = await this.#repository.create(newBrand);
    const resData = new ResData("User created", 201, foundAll);

    return resData;
  }

  async update(dto, id) {
    const check = await this.#repository.findOneById(id);
    if(!check){
      throw new ResData("user not found", 404, null, check);
    }
    const newBrand = new SchoolEntity(dto);
    const foundAll = await this.#repository.update(newBrand, id);
    const resData = new ResData("user updated", 201, foundAll);

    return resData;
  }

  async delete(id) {
    const check = await this.#repository.findOneById(id);
    if(!check){
      throw new ResData("user not found", 404, null, check);
    }
    const foundAll = await this.#repository.delete(id);
    const resData = new ResData("user deleted", 203, foundAll);
    return resData;
  }
}
