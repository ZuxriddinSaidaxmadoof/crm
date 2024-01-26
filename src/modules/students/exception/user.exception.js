export class UserNotFoundException extends Error {
  constructor() {
    super("Student not found");

    this.statusCode = 404;
  }
}

export class FileNotFoundException extends Error {
  constructor() {
    super("file not found");

    this.statusCode = 404;
  }
}
