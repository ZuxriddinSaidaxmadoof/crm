import { Postgres } from "../../lib/pg.js";

export class UserRepository extends Postgres {
  async findAll() {
    return await this.fetchAll("select * from brands");
  }
  async findOneByname(name) {
    return await this.fetch("select * from brands where login = $1", name);
  }
  async findOneById(id) {
    return await this.fetch("select * from brands where id = $1", id);
  }
  async create(dto) {
    return await this.fetch("INSERT INTO brands(name, is_public) VALUES($1, $2) RETURNING *;", dto.name, dto.is_public);
  }
  async update(dto, id) {
    return await this.fetch(`UPDATE brands SET name = $1, is_public = $2 WHERE id = $3 RETURNING *;`, dto.name, dto.is_public, id);
  }
  async delete(id) {
    return await this.fetch(`DELETE FROM brands WHERE id = $1 RETURNING *;`, id);
  }
}
