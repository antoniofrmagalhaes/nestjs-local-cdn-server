import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageUploadService {
  upload(file: Express.Multer.File) {
    return {
      filename: file.filename,
      url: `/cdn/uploads/${file.filename}`,
    };
  }
}
