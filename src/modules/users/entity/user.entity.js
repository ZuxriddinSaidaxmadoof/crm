export class userEntity {
  constructor(dto) {
    this.first_name = dto.firstName;
    this.last_name = dto.lastName;
    this.email = dto.email;
    this.role = 'user';
    this.password = dto.password;
  }
}
export class adminEntity {
  constructor(dto) {
    this.first_name = dto.firstName;
    this.last_name = dto.lastName;
    this.email = dto.email;
    this.role = 'admin';
    this.password = dto.password;
  }
}
