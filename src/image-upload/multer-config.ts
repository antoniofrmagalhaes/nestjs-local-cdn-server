import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerConfig = {
  storage: diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
      const name = file.originalname
        .split('.')[0]
        .replace(/\s+/g, '_')
        .replace(/-+/g, '_')
        .toLowerCase();

      const timestamp = Date.now();
      const extension = extname(file.originalname).toLowerCase();

      const filename = `${name}_${timestamp}${extension}`;
      cb(null, filename);
    },
  }),
};
