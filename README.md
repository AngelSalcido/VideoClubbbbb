[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18521284&assignment_repo_type=AssignmentRepo)
# **Universidad Autónoma de Chihuahua**  
## **Facultad de Ingeniería**  
### **Materia: Web Platforms**  

# **Sistema de Administración de Préstamos de Películas - Video Club**

## **Descripción del Proyecto**
Este proyecto tiene como objetivo desarrollar un sistema para la administración de préstamos de películas en un videoclub. La aplicación permitirá gestionar el catálogo de películas, registrar usuarios y controlar los préstamos y devoluciones de manera eficiente.

## **Tecnologías Utilizadas**
- **Frontend:** Vue.js
- **Backend:** Node.js con Express
- **Autenticación:** JWT (JSON Web Token)
- **Base de Datos:** MongoDB
- **Control de Versiones:** Git
- **Seguridad y Permisos:** CORS y autenticación con JWT
- **Despliegue:** Docker

## **Estructura del Proyecto**
```
📂 proyecto-de-clase-video-club-AngelSalcido
│── 📂 backend
│   │── 📂 bin
│   │── 📂 controllers
│   │── 📂 models
│   │── 📂 public
│   │── 📂 routes
│   │── 📂 test
│   │── 📂 views
│   │── 📂 config
│   │── app.js
│   │── package.json
│   │── Dockerfile
│   └── .env
│
│── 📂 frontend
│   │── 📂 src
│   │   │── 📂 assets
│   │   │── 📂 components
│   │   │── 📂 views
│   │   │── 📂 router
│   │   │── App.vue
│   │   │── main.js
│   │
│   │── 📂 public
│   │── 📂 tests
│   │── package.json
│   │── Dockerfile
│   └── vue.config.js
│
│── 📂 docs (diagramas y documentación)
│── docker-compose.yml
│── README.md
└── .gitignore
```

## **Instalación y Ejecución**
### **Requisitos Previos:**
- Node.js y npm
- MongoDB
- Docker (opcional para despliegue)

### **1. Clonar el Repositorio**
```sh
 git clone https://github.com/OPC02/proyecto-de-clase-video-club-AngelSalcido.git
 cd proyecto-de-clase-video-club-AngelSalcido
```

### **2. Configurar el Backend**
```sh
 cd backend
 npm install
 npm start
```

### **3. Configurar el Frontend**
```sh
 cd frontend
 npm install
 npm run serve
```

### **4. Opcional: Ejecutar con Docker**
```sh
 docker-compose up --build
```

## **Diagramas del Proyecto**
### **Diagrama de Clases**
El diagrama de clases representa la estructura del sistema y la relación entre los distintos objetos y entidades. Se encuentra en la carpeta `docs/`.

### **Diagrama de Secuencia**
El diagrama de secuencia describe la interacción entre los distintos componentes del sistema y el flujo de comunicación entre ellos. Se encuentra en la carpeta `docs/`.

### **Wireframes**
Los wireframes del sistema están disponibles en el siguiente enlace de Figma:
[Wireframes en Figma](#)

## **Autores**
- **Angel Efren Salcido Delgado 353330** - [Developer]

## **Contribución**
Si deseas contribuir, sigue estos pasos:
1. Haz un **fork** del repositorio.
2. Crea una nueva rama (`feature/nueva-funcionalidad`).
3. Realiza los cambios y haz **commit**.
4. Envía un **pull request**.

## **Licencia**
Este proyecto es de código abierto y se distribuye bajo la licencia MIT.
