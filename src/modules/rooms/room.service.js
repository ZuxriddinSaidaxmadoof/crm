import { ResData } from "../../common/resData.js";
import { RoomRepository } from "./room.repository.js";
import { RoomNotFoundException } from "./exception/room.exception.js";
import { RoomEntity } from "./entity/room.entity.js";

export class RoomService {
  #repository;
  constructor() {
    this.#repository = new RoomRepository();
  }

  async getAll() {
    console.log(1);
    const rooms = await this.#repository.findAll();

    const resData = new ResData("get All rooms", 200, rooms);

    return resData;
  }

  async getById(id) {
    const roomId = await this.#repository.findOneById(id);

    if (!roomId) {
      throw new RoomNotFoundException();
    }

    const resData = new ResData("get gy id room", 201, roomId);

    return resData;
  }

  async create(dto) {
    const newRoom = new RoomEntity(dto);

    const room = await this.#repository.create(newRoom);

    const resData = new ResData("create room", 201, room);

    return resData;
  }

  async update(dto, id) {
    const data = { ...dto, id: id };

    const updateRoom = await this.#repository.update(data);

    const resData = new ResData("update room", 201, updateRoom);

    return resData;
  }

  async delete(id) {
    const roomId = await this.#repository.findOneById(id);

    if (!roomId) {
      throw new RoomNotFoundException();
    }

    const deleteRoom = await this.#repository.delete(id);

    const resData = new ResData("deleet by id room", 201, roomId);

    return resData;
  }
}
