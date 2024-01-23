import { Postgres } from "../../lib/pg.js";

export class UserRepository extends Postgres {
  async findAll() {
    return await this.fetchAll("select * from user_parents");
  }
  async findOneByname(name) {
    return await this.fetch("select * from user_parents where login = $1", name);
  }
  async findOneById(id) {
    return await this.fetch("select * from user_parents where id = $1", id);
  }
  async create(dto) {
    return await this.fetch("INSERT INTO user_parents(child_id, parent_id) VALUES($1, $2) RETURNING *;", dto.child_id, dto.parent_id);
  }
  async update(dto, id) {
    return await this.fetch(`UPDATE user_parents SET name = $1, is_public = $2 WHERE id = $3 RETURNING *;`, dto.name, dto.is_public, id);
  }
  async delete(id) {
    return await this.fetch(`DELETE FROM user_parents WHERE id = $1 RETURNING *;`, id);
  }
}
