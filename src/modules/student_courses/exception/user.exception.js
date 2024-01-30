export class UserNotFoundException extends Error {
  constructor() {
    super("student not found");

    this.statusCode = 404;
  }
}
export class CourseNotFoundException extends Error {
  constructor() {
    super("course not found");

    this.statusCode = 404;
  }
}
export class Student_courseNotFoundException extends Error {
  constructor() {
    super("student_course not found");

    this.statusCode = 404;
  }
}