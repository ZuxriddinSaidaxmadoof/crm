export class FileNotFoundException extends Error {
  constructor() {
    super("file not found");

    this.statusCode = 404;
  }
}
