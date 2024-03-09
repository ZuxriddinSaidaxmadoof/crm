export class RoomEntity {
  constructor(dto) {
    this.number = dto.number;
    this.name = dto.name;
    this.floor = dto.floor || 1;
    this.capacity = dto.capacity || 10;
  }
}
