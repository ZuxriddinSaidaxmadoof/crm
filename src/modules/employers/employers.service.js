import { ResData } from "../../common/resData.js";
import { EmployersRepository } from "./employers.repository.js";
import { EmployersNotFoundException } from "./exception/employers.exception.js";
import { EmployersEntity } from "./entity/employers.entity.js";

export class EmployersService {
  #repository;
  constructor() {
    this.#repository = new EmployersRepository();
  }

  async getAll() {
    const employers = await this.#repository.findAll();
    
    const resData = new ResData("get all employers", 200, employers);
    
    return resData;
  }
  
  async getOneById(Id) {
    const employersId = await this.#repository.findOneById(Id);
    
    if (!employersId) {
      throw new EmployersNotFoundException();
    }
    
    const resData = new ResData("get by id employers", 200, employersId);
    
    return resData;
  }
  
  async create(dto) {
    const newEmployers = new EmployersEntity(dto);

    const employers = await this.#repository.create(newEmployers);


    const resData = new ResData("Employers created", 200, employers);

    return resData;
  }

  async update(dto) {
    const updateEmployers = await this.#repository.update(dto);

    const resData = new ResData("updated by id", 200, updateEmployers);

    return resData;
  }

  async delete(Id) {
    const employersId = await this.#repository.findOneById(Id);

    if (!employersId) {
      throw new EmployersNotFoundException();
    }

    const deleteEmployers = await this.#repository.delete(Id);

    const resData = new ResData("deleted Id", 200, employersId);

    return resData;
  }
}
