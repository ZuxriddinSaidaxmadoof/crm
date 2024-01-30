import { Postgres } from "../../lib/pg.js";

export class UserRepository extends Postgres {
  async findAll() {
    return await this.fetchAll("select * from student_courses");
  }
  async findOneByname(name) {
    return await this.fetch("select * from student_courses where login = $1", name);
  }
  async findOneById(id) {
    return await this.fetch("select * from student_courses where id = $1", id);
  }
  async create(dto) {
    return await this.fetch("INSERT INTO student_courses(student_id, course_id) VALUES($1, $2) RETURNING *;", dto.student_id, dto.course_id);
  }
  async update(dto, id) {
    return await this.fetch(`UPDATE student_courses SET student_id = $1, course_id = $2 WHERE id = $3 RETURNING *;`, dto.student_id, dto.course_id, id);
  }
  async delete(id) {
    return await this.fetch(`DELETE FROM student_courses WHERE id = $1 RETURNING *;`, id);
  }
}
