export class EmployersNotFoundException extends Error {
  constructor() {
    super("Employers not found");

    this.statusCode = 404;
  }
}

export class EmployersException extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}