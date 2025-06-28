# Nike Store CRUD – Proyecto Tecnologías Computacionales

> **Alumno:** Raúl Sebastián  
> **Profesor:** Valdovinos Chacón  
> **Entrega:** Segundo Parcial – CRUD con Backend y Frontend

---

## 🚀 Descripción General

Aplicación web fullstack desarrollada en **JavaScript** usando **React (Vite)** para el frontend y **Node.js/Express** para el backend.  
Permite **crear, leer, actualizar y eliminar** productos (nombre, precio, imagen).  
**100% funcional y con persistencia local** en `backend/products.json`.

---

## ⚙️ ¿Cómo ejecutar el proyecto?

### **Requisitos**
- Node.js v18+ y npm
- Navegador moderno (Chrome, Edge, Firefox, etc.)

---

### **Instalación y ejecución rápida**

```bash
# 1. Clona este repositorio
git clone https://github.com/RaulSebastian-BK/NIKE-STORE
cd NIKE-STORE

# 2. Instala las dependencias
cd backend
npm install
cd ../frontend
npm install

# 3. Inicia el backend
cd ../backend
node index.js
# El backend inicia en: http://localhost:3000

# 4. Inicia el frontend (React + Vite)
cd ../frontend
npm run dev
# El frontend inicia en: http://localhost:5173 (puede variar el puerto, revisa la terminal)
```




📝 ¿Cómo se usa?
- Abre la URL del frontend en tu navegador.
- Agrega productos (nombre, precio, imagen).
- Edita o elimina usando los botones.
- Los datos se guardan en backend/products.json.

NIKE-STORE/
│
├── backend/
│   ├── index.js         # Servidor Express (API REST)
│   └── products.json    # Persistencia local
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── ProductForm.jsx
│   │   ├── ProductList.jsx
│   │   ├── main.jsx
│   │   └── App.css      # (opcional)
│   └── package.json
│
├── README.md
└── .gitignore

❗️Notas importantes
No subas node_modules (usa el .gitignore incluido).
El backend debe estar corriendo para que el frontend funcione.
Si el puerto 5173 está ocupado, Vite usará otro (verifica la terminal).
Revisa products.json para validar la persistencia.
Proyecto desarrollado íntegramente en JavaScript, usando React (frontend) y Node.js/Express (backend).

💡 Autor y contacto
Raúl Sebastián
ing.raul.sebastian.bk@gmail.com
[Fecha de entrega: 28/06/2025]