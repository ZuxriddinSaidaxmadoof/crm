export class BrandEntity {
  constructor(dto) {
    this.first_name = dto.firstName;
    this.last_name = dto.lastName;
    this.number = dto.number;
    this.about = dto.about;
  }
}
