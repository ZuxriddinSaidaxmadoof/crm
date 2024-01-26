import { Postgres } from "../../lib/pg.js";

export class FileRepository extends Postgres {
  async findAll() {
    return await this.fetchAll("SELECT * FROM files");
  }

  async findOneById(id) {
    return await this.fetch("SELECT * FROM files WHERE id = $1", id);
  }

  async create(dto) {
    return await this.fetch(
      "INSERT INTO files(original_name, path, size, mine_type) VALUES ($1, $2, $3, $4) RETURNING * ;",
      dto.original_name,
      dto.path,
      dto.size,
      dto.mine_type
    );
  }
}
