import { Postgres } from "../../lib/pg.js";

export class EmployersRepository extends Postgres {
  async findAll() {
    return await this.fetchAll("select * from employers");
  }
  async findOneById(id) {
    return await this.fetch("select * from employers where id = $1", id);
  }
  async create(dto) {
    return await this.fetch(
      "INSERT INTO employers(first_name, last_name, email, phone, position, file_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING * ;",
      dto.first_name,
      dto.last_name,
      dto.email,
      dto.phone,
      dto.position,
      dto.file_id
    );
  }
  async update(dto) {
    return await this.fetch(
      "UPDATE employers SET first_name = $1, last_name = $2, email = $3, phone = $4, position = $5, file_id = $6  WHERE id = $7 RETURNING *",
      dto.first_name,
      dto.last_name,
      dto.email,
      dto.phone,
      dto.position,
      dto.file_id,
      dto.id
    );
  }
  async delete(id) {
    return await this.fetch("DELETE FROM employers WHERE id = $1;", id);
  }
}
