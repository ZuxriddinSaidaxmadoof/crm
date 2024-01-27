export class UserNotFoundException extends Error {
  constructor() {
    super("user not found");

    this.statusCode = 404;
  }
}

export class IncorrectPasswordException extends Error {
  constructor() {
    super("incorrect password");

    this.statusCode = 400;
  }
}