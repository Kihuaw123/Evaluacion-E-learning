# 📚 Guía Definitiva y Códigos - Evaluación 1 (E-Learning)

Este archivo contiene la secuencia exacta de comandos y el código fuente final utilizado para la maquetación responsiva de la plataforma educativa.

---

## 🚀 1. Secuencia de Comandos en la Terminal (Desde 0)

Ejecuta estos comandos en orden para inicializar y desplegar el proyecto:

```bash
# Paso 1: Crear el proyecto base con Vite
npm create vite@latest mi-evaluacion-web -- --template vanilla

# Paso 2: Entrar a la carpeta del proyecto (¡OBLIGATORIO!)
cd mi-evaluacion-web

# Paso 3: Instalar los módulos base de Node
npm install

# Paso 4: Levantar el servidor local (Ver cambios en http://localhost:5173)
npm run dev

# -------------------------------------------------------------
# comandos para conectar y subir a GITHUB (En una pestaña nueva de la terminal)
# -------------------------------------------------------------
cd mi-evaluacion-web
git init
git add .
git commit -m "feat: proyecto final e-learning con tailwind css y flowbite"
git branch -M main
git remote add origin [https://github.com/TU_USUARIO/TU_REPOSITORIO.git](https://github.com/TU_USUARIO/TU_REPOSITORIO.git)
git push -u origin main


