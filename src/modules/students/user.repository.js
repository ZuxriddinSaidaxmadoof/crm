import { Postgres } from "../../lib/pg.js";

export class UserRepository extends Postgres {
  async findAll() {
    return await this.fetchAll("select * from students");
  }
  async findByPage(limit, offset) {
    return await this.fetchAll("select * from students limit $1 offset $2;", limit, offset);
  }
  async findOneByname(name) {
    return await this.fetch("select * from students where login = $1", name);
  }
  async findOneById(id) {
    return await this.fetch("select * from students where id = $1", id);
  }
  async create(dto) {
    return await this.fetch(`
    INSERT INTO students(first_name, last_name, number,about)
    VALUES ($1,$2,$3,$4) RETURNING *;
    `, dto.first_name, dto.last_name,dto.number, dto.about);
  }

  async update(dto, id) {
    return await this.fetch(`UPDATE students SET first_name = $1, last_name = $2, number = $3, about = $4 WHERE id = $5 RETURNING *;`, dto.first_name, dto.last_name,dto.number, dto.about, id);
  }
  async delete(id) {
    return await this.fetch(`DELETE FROM students WHERE id = $1 RETURNING *;`, id);
  }
}
