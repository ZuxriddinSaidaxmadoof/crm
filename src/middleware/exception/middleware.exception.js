export class AuthorizationTokenRequiredException extends Error {
  constructor() {
    super("token must be required");

    this.statusCode = 401;
  }
}
export class AuthorizationUserIdRequiredException extends Error {
  constructor() {
    super("UserId must be required");

    this.statusCode = 401;
  }
}
export class ForbidenUserRoleException extends Error {
  constructor() {
    super("Forbidden user role");

    this.statusCode = 403;
  }
}
export class ForbidenAdminRoleException extends Error {
  constructor() {
    super("Forbidden admin role");

    this.statusCode = 403;
  }
}