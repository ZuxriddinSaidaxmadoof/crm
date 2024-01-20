export class SchoolEntity {
  constructor(dto) {
    this.name = dto.name;
    this.address = dto.address || null;
    this.latitude = dto.latitude || null;
    this.longitude = dto.longitude || null;
    this.phone = dto.phone || null;
    this.brand_id = dto.brandId;
  }
}

