<p align="center">
  <a href="https://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  Um serviço de <strong>CDN local</strong> construído com <a href="https://nestjs.com" target="_blank">NestJS</a>, usado para upload e entrega de imagens via rota estática.
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjs" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjs" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>

---

## 📦 Descrição

Este projeto é um serviço leve de **upload e entrega de arquivos (CDN local)** construído com NestJS.

- Upload de imagens via `POST /image-upload`
- Armazenamento local em disco (na pasta `public/uploads`)
- Padronização dos nomes dos arquivos (`nome_timestamp.ext`)
- Acesso público via rota estática `/cdn/uploads/filename.ext`
- Código modular
- Padronização de imports com [eslint-plugin-import-helpers](https://github.com/willhoney7/eslint-plugin-import-helpers)

---

## 🚀 Instalação

```bash
$ npm install
```

---

## ▶️ Execução

```bash
# desenvolvimento
$ npm run start:dev

# produção
$ npm run start:prod
```

Variáveis de ambiente `.env`:

```env
PORT=4000
```

---

## 📤 Upload de imagem

**Endpoint:** `POST /image-upload`  
**Content-Type:** `multipart/form-data`  
**Campo:** `file`

**Resposta esperada:**

```json
{
  "filename": "exemplo_1715253000000.jpg",
  "url": "/cdn/uploads/exemplo_1715253000000.jpg"
}
```

A imagem pode ser acessada via URL estática:

```
http://localhost:4000/cdn/uploads/exemplo_1715253000000.jpg
```

---

## 📂 Estrutura

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

## 📐 Padrões adotados

- NestJS com estrutura modular
- Upload com Multer (`diskStorage`)
- Padronização de nomes de arquivos (sem espaços, minúsculo, com `_`)
- ESLint com `eslint-plugin-import-helpers` para ordenação de imports
- `.env` com `@nestjs/config`

---

## 👨‍💻 Autor

Desenvolvido com 💻 por [Antonio Magalhães](https://github.com/antoniofrmagalhaes).

---

## 📄 Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
