import { Postgres } from "../../lib/pg.js";

export class RoomRepository extends Postgres {
  async findAll() {
    return await this.fetchAll("select * from rooms");
  }

  async findOneById(id) {
    return await this.fetch("select * from rooms where id = $1", id);
  }

  async create(dto) {
    return await this.fetch(
      "insert into rooms(number, name, floor, capacity) values($1, $2, $3, $4) RETURNING *",
      dto.number,
      dto.name,
      dto.floor,
      dto.capacity
    );
  }

  async update(dto) {
    return await this.fetch(
      "update rooms set number = $1, name = $2, floor = $3, capacity = $4 where id = $5 RETURNING *",
      dto.number,
      dto.name,
      dto.floor,
      dto.capacity,
      dto.id
    );
  }

  async delete(id) {
    return await this.fetch("delete from rooms where id = $1", id);
  }
}
