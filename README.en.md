<p align="center">
  <a href="https://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  A <strong>local CDN service</strong> built with <a href="https://nestjs.com" target="_blank">NestJS</a>, used for image upload and delivery through a static route.
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjs" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjs" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>

---

## 📦 Description

This project is a lightweight **local CDN service** built with NestJS.

- Image upload via `POST /image-upload`
- Local disk storage in the `public/uploads` folder
- Filename normalization (`name_timestamp.ext`)
- Public access via static route `/cdn/uploads/filename.ext`
- Modular code architecture
- Import sorting with [eslint-plugin-import-helpers](https://github.com/willhoney7/eslint-plugin-import-helpers)

---

## 🚀 Installation

```bash
$ npm install
```

---

## ▶️ Running

```bash
# development
$ npm run start:dev

# production
$ npm run start:prod
```

`.env` environment variables:

```env
PORT=4000
```

---

## 📤 Image Upload

**Endpoint:** `POST /image-upload`  
**Content-Type:** `multipart/form-data`  
**Field:** `file`

**Expected response:**

```json
{
  "filename": "example_1715253000000.jpg",
  "url": "/cdn/uploads/example_1715253000000.jpg"
}
```

Image can be accessed via static URL:

```
http://localhost:4000/cdn/uploads/example_1715253000000.jpg
```

---

## 📂 Project Structure

```
docs/
└── collection.json/
public/
└── uploads/
src/
├── image-upload/
│   ├── image-upload.controller.ts
│   ├── image-upload.service.ts
│   ├── image-upload.module.ts
│   └── multer-config.ts
├── app.module.ts
├── main.ts
.env
```

---

## 📐 Conventions

- Modular architecture using NestJS
- Uploads handled with Multer (`diskStorage`)
- Normalized filenames (no spaces, lowercase, `_` separator)
- ESLint import ordering using `eslint-plugin-import-helpers`
- Environment configuration with `@nestjs/config`

---

## 👨‍💻 Author

Built with 💻 by [Antonio Magalhães](https://github.com/antoniofrmagalhaes).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
