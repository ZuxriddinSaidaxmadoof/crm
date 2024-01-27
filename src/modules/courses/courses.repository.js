import { Postgres } from "../../lib/pg.js";

export class CoursesRepository extends Postgres {
  async findAll() {
    return await this.fetchAll("select * from courses");
  }

  async findOneById(id) {
    return await this.fetch("select * from courses where id = $1", id);
  }

  async create(dto) {
    return await this.fetch(
      "INSERT INTO courses(name, description, start_date, end_date, instructor) VALUES($1, $2, $3, $4, $5) RETURNING * ;",
      dto.name,
      dto.description,
      dto.start_date,
      dto.end_date,
      dto.instructor
    );
  }

  async update(dto) {
    return await this.fetch(
      "UPDATE courses SET name = $1, description = $2, start_date = $3, end_date = $4, instructor = $5 WHERE id = $6 RETURNING *;",
      dto.name,
      dto.description,
      dto.start_date,
      dto.end_date,
      dto.instructor,
      dto.id
    );
  }

  async delete(id) {
    return await this.fetch("DELETE FROM courses WHERE id = $1 ;", id);
  }
}
