export class EmployersEntity {
  constructor(dto) {
    this.first_name = dto.firstName;
    this.last_name = dto.lastName;
    this.email = dto.email;
    this.phone = dto.phone;
    this.position = dto.position;
    this.file_id = dto.fileId;
  }
}
