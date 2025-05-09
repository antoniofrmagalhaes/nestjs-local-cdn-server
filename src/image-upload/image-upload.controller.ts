import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { ImageUploadService } from './image-upload.service';
import { multerConfig } from './multer-config';

@Controller('image-upload')
export class ImageUploadController {
  constructor(private readonly imageUploadService: ImageUploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', multerConfig))
  handleUpload(@UploadedFile() file: Express.Multer.File) {
    return this.imageUploadService.upload(file);
  }
}
