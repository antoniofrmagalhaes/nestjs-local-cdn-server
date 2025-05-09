import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerConfig = {
  storage: diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
      const name = file.originalname.replace(/\s+/g, '-').split('.')[0];
      const timestamp = Date.now();
      const extension = extname(file.originalname);
      const filename = `${name}_${timestamp}${extension}`;
      cb(null, filename);
    },
  }),
};
