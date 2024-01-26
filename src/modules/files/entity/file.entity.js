export class FileEntity {
  constructor(originalname, path, size, mimetype) {
    this.original_name = originalname;
    this.path = path;
    this.size = size;
    this.mime_type = mimetype;
  }
}
