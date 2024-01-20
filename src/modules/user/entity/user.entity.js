export class UserEntity {
  constructor(dto) {
    this.login = dto.login;
    this.password = dto.password;
    this.role = dto.role;
    this.sex = dto.sex || null;
    this.first_name = dto.firstName;
    this.last_name = dto.lastName;
    this.phone = dto.phone;
    this.address = dto.address || null;
    this.latitude = dto.latitude || null;
    this.longitude = dto.longitude || null;
    this.phone = dto.phone || null;
    this.group_id = dto.groupId || null;
    this.brand_id = dto.brandId;
  }
}
