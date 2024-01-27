import { ResData } from "../../common/resData.js";
import { CoursesRepository } from "./courses.repository.js";
import { CoursesEntity } from "./entity/courses.entity.js";
import { CoursesNotFoundException } from "./exception/courses.exception.js";

export class CoursesService {
  #repository;
  constructor() {
    this.#repository = new CoursesRepository();
  }

  async getAll() {
    const foundAll = await this.#repository.findAll();

    const resData = new ResData("All courses", 200, foundAll);

    return resData;
  }

  async getOneById(id) {
    const foundId = await this.#repository.findOneById(id);

    if (!foundId) {
      throw new CoursesNotFoundException();
    }

    const resData = new ResData("One courses by id", 200, foundId);

    return resData;
  }

  async create(dto) {
    const newCourses = new CoursesEntity(dto);

    const courses = await this.#repository.create(newCourses);

    const resData = new ResData("courses saccses", 201, newCourses);

    return resData;
  }

  async update(dto) {
    const updatedCourses = await this.#repository.update(dto);

    const resData = new ResData("courses updated", 201, updatedCourses);

    return resData;
  }

  async delete(id) {
    const foundId = await this.#repository.findOneById(id);

    if (!foundId) {
      throw new CoursesNotFoundException();
    }

    const deleteCourses = await this.#repository.delete(id);

    const resData = new ResData("Courses deleted", 203, foundId);

    return resData;
  }
}
