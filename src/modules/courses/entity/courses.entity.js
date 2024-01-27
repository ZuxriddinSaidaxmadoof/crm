export class CoursesEntity {
  constructor(dto) {
    this.name = dto.name;
    this.description = dto.description;
    this.start_date = dto.startDate;
    this.end_date = dto.endDate;
    this.instructor = dto.instructor;
  }
}
