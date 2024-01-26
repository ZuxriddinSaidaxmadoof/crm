import { ResData } from "../../common/resData.js";
import { UserRepository } from "./user.repository.js";
import { userEntity, adminEntity } from "./entity/user.entity.js"

export class UserService {
  #repository;
  constructor() {
    this.#repository = new UserRepository();
  }

  async getAll() {
    const foundAll = await this.#repository.findAll();

    const resData = new ResData("All users", 200, foundAll);

    return resData;
  }

  async getOne(id) {
    const foundAll = await this.#repository.findOneById(id);

    const resData = new ResData("One user by id", 200, foundAll);
    if(!resData.data){
      return new ResData("user not found", 404, null, null);
    }

    return resData;
  }

  async create(dto) {

    const newBrand = new userEntity(dto);
// console.log(newBrand);
    const foundAll = await this.#repository.create(newBrand);
    const resData = new ResData("user created", 201, foundAll);

    return resData;
  }

  async update(dto, id) {
    const check = await this.#repository.findOneById(id);
    if(!check){
      throw new ResData("user not found", 404, null, check);
    }
    const newBrand = new userEntity(dto);
    const foundAll = await this.#repository.update(newBrand, id);
    const resData = new ResData("user updated", 201, foundAll);

    return resData;
  }

  async delete(id) {
    const check = await this.#repository.findOneById(id);
    if(!check){
      throw new ResData("Brand not found", 404, null, check);
    }
    const foundAll = await this.#repository.delete(id);
    const resData = new ResData("Brand deleted", 203, foundAll);
    return resData;
  }
}
