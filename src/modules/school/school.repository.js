import { Postgres } from "../../lib/pg.js";

export class UserRepository extends Postgres {
  async findAll() {
    return await this.fetchAll("select * from schools");
  }
  async findOneByname(name) {
    return await this.fetch("select * from schools where login = $1", name);
  }
  async findOneById(id) {
    return await this.fetch("select * from schools where id = $1", id);
  }
  async create(dto) {
    return await this.fetch(`INSERT INTO schools(name,address,latitude,longitude,phone,brand_id) VALUES($1,$2,$3,$4,$5,$6) RETURNING *;`, dto.name, dto.address,dto.latitude,dto.longitude,dto.phone,dto.brand_id);
  }


  async update(dto, id) {
    return await this.fetch(`UPDATE schools SET name = $1,address = $2,latitude = $3,longitude = $4,phone = $5,brand_id = $6 WHERE id = $7 RETURNING *;`, dto.name, dto.address,dto.latitude,dto.longitude,dto.phone,dto.brand_id, id);
  }
  async delete(id) {
    return await this.fetch(`DELETE FROM schools WHERE id = $1 RETURNING *;`, id);
  }
}
