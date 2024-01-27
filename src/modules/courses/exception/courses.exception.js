export class CoursesNotFoundException extends Error {
  constructor() {
    super("Courses not found");

    this.statusCode = 404;
  }
}

export class CoursesException extends Error {
  constructor(message) {
    super(message);

    this.statusCode = 400;
  }
}
