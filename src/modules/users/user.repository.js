import { Postgres } from "../../lib/pg.js";

export class UserRepository extends Postgres {
  async findAll() {
    return await this.fetchAll("select * from users");
  }
  async findOneByname(name) {
    return await this.fetch("select * from users where login = $1", name);
    
  }
  async findOneById(id) {
    return await this.fetch("select * from users where id = $1", id);
  }
  async findOneByPhone(id) {
    return await this.fetch("select * from users where number = $1", id);
  }
  async create(dto) {
    return await this.fetch(`
    INSERT INTO users(first_name, last_name, number,password, role)
    VALUES ($1,$2,$3,$4,$5) RETURNING *;
    `, dto.first_name, dto.last_name,dto.number,dto.password,dto.role);
  }
  async update(dto, id) {
    return await this.fetch(`UPDATE users SET first_name = $1, last_name = $2, number = $3, password =$4 WHERE id = $5 RETURNING *;`, dto.first_name, dto.last_name,dto.number,dto.password, id);
  }
  async delete(id) {
    return await this.fetch(`DELETE FROM users WHERE id = $1 RETURNING *;`, id);
  }
}
