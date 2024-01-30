import { ResData } from "../../common/resData.js";
import { UserRepository } from "./student_course.repository.js";
import { BrandEntity } from "./entity/user.entity.js"
import { UserRepository as StudentRepository } from "../students/user.repository.js";
import { CoursesRepository } from "../courses/courses.repository.js";
import { UserNotFoundException, CourseNotFoundException, Student_courseNotFoundException } from "./exception/user.exception.js"

export class UserService {
  #repository;
  constructor() {
    this.#repository = new UserRepository();
  }

  async getAll() {
    const foundAll = await this.#repository.findAll();

    const resData = new ResData("All student-courses", 200, foundAll);

    return resData;
  }

  async getOne(id) {
    const foundAll = await this.#repository.findOneById(id);

    const resData = new ResData("One student-course by id", 200, foundAll);
    if(!resData.data){
      return new ResData("student-course not found", 404, null, null);
    }

    return resData;
  }

  async create(dto) {
    const user_repository = new StudentRepository();
    const course_repository = new CoursesRepository();
    const newBrand = new BrandEntity(dto);
    
    const findStudent = user_repository.findOneById(dto.studentId);
    if(!findStudent){
      throw new UserNotFoundException();
    }
    const findCourse = course_repository.findOneById(dto.courseId);
    if(!findCourse){
      throw new CourseNotFoundException();
    }

    const foundAll = await this.#repository.create(newBrand);
    const resData = new ResData("student-course created", 201, foundAll);

    return resData;
  }

  async update(dto, id) {
    const check = await this.#repository.findOneById(id);
    if(!check){
      throw new Student_courseNotFoundException();
      
    }
    const newBrand = new BrandEntity(dto);
    const foundAll = await this.#repository.update(newBrand, id);
    const resData = new ResData("student-course updated", 201, foundAll);

    return resData;
  }

  async delete(id) {
    const check = await this.#repository.findOneById(id);
    if(!check){
      throw new Student_courseNotFoundException();
    }
    const foundAll = await this.#repository.delete(id);
    const resData = new ResData("student-course deleted", 203, foundAll);
    return resData;
  }
}
