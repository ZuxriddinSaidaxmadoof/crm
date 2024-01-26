import { ResData } from "../../common/resData.js";
import { UserRepository } from "./user.repository.js";
import { userEntity, adminEntity } from "./entity/user.entity.js"

export class UserService {
  #repository;
  constructor() {
    this.#repository = new UserRepository();
  }

// GET ALL USER
  async getAll() {
    const foundAll = await this.#repository.findAll();

    const resData = new ResData("All users", 200, foundAll);

    return resData;
  }

// GET ONE USER BY ID
  async getOne(id) {
    const foundAll = await this.#repository.findOneById(id);

    const resData = new ResData("One user by id", 200, foundAll);
    if(!resData.data){
      return new ResData("user not found", 404, null, null);
    }

    return resData;
  }


// CREATE USER
  async create(dto) {

    const newBrand = new userEntity(dto);
    const foundAll = await this.#repository.create(newBrand);
    const resData = new ResData("user created", 201, foundAll);

    return resData;
  }

// CREATE ADMIN
  async createAdmin(dto) {

    const newBrand = new adminEntity(dto);
    const foundAll = await this.#repository.create(newBrand);
    const resData = new ResData("user created", 201, foundAll);

    return resData;
  }

// UPDATE USER
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

// DELETE USER
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