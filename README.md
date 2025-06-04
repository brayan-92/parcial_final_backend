# parcial_final_backend
# Sistema de Gestión de Usuarios y Roles

Este proyecto es una aplicación fullstack que permite gestionar usuarios y roles a través de una interfaz web. El sistema está dividido en frontend y backend.

---
/backend
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── index.ts
├── tsconfig.json
└── package.json

---

## 🚀 Funcionalidades

### ✅ Frontend (Vue + Vite)
- Formulario para agregar roles
- Formulario para agregar usuarios (solo si existen roles)
- Vista general con lista de usuarios (nombre completo y rol) y lista de roles

### ✅ Backend (Express + TypeScript + MongoDB o JSON temporal)
- API para crear y listar roles
- API para crear y listar usuarios

---

## ⚙️ Tecnologías

- **Frontend:** Vue 3, Vite, Axios, Vue Router, TypeScript
- **Backend:** Express, TypeScript, CORS, Body-Parser
- **Base de datos:** MongoDB (o archivo temporal si es sin persistencia)

---

## 🧪 Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/tu-repositorio.git
cd tu-repositorio
| Método | Ruta         | Descripción               |
| ------ | ------------ | ------------------------- |
| GET    | `/api/roles` | Obtener lista de roles    |
| POST   | `/api/roles` | Crear un nuevo rol        |
| GET    | `/api/users` | Obtener lista de usuarios |
| POST   | `/api/users` | Crear un nuevo usuario    |

/frontend
├── src/
│   ├── components/
│   │   ├── createRol.vue
│   │   ├── createUser.vue
│   │   └── users.vue
│   ├── router/
│   │   └── index.ts
│   ├── services/
│   │   └── api.ts
│   ├── App.vue
│   └── main.ts
├── vite.config.ts
└── package.json
# enlace repositorio frontend https://github.com/brayan-92/parcial_final_frontend



