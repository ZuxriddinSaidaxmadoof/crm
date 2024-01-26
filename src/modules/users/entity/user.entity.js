export class userEntity {
  constructor(dto) {
    this.first_name = dto.firstName;
    this.last_name = dto.lastName;
    this.number = dto.number;
    this.role = 'user';
    this.password = dto.password;
  }
}
export class adminEntity {
  constructor(dto) {
    this.first_name = dto.firstName;
    this.last_name = dto.lastName;
    this.number = dto.number;
    this.role = 'admin';
    this.password = dto.password;
  }
}
