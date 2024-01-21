import { Postgres } from "../../lib/pg.js";

export class UserRepository extends Postgres {
  async findAll() {
    return await this.fetchAll("select * from users");
  }
  async findOneByLogin(login) {
    return await this.fetch("select * from users where login = $1", login);
  }
  async findOneById(id) {
    return await this.fetch("select * from users where id = $1", id);
  }
  async createUser(dto) {
    return await this.fetch(`INSERT INTO users(login, password, role,first_name, last_name, brand_id)
    VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;`, dto.login, dto.password, dto.role, dto.first_name, dto.last_name, dto.brand_id);
  }
  async update(dto, id) {
    return await this.fetch(`UPDATE users SET name = $1,address = $2,latitude = $3,longitude = $4,phone = $5,brand_id = $6 WHERE id = $7 RETURNING *;`, dto.name, dto.address,dto.latitude,dto.longitude,dto.phone,dto.brand_id, id);
  }
  async delete(id) {
    return await this.fetch(`DELETE FROM users WHERE id = $1 RETURNING *;`, id);
  }
}
