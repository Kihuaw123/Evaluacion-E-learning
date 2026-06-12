/**
 * LÓGICA DE INTERACTIVIDAD - PLATAFORMA E-LEARNING
 * Desarrollado de forma individual para Evaluación 1
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // Elementos del DOM
  const btnCursos = document.getElementById('btn-cursos');
  const seccionCursos = document.getElementById('seccion-cursos');

  // Evento para el botón "Ver Cursos" (Scroll Suave)
  if (btnCursos && seccionCursos) {
    btnCursos.addEventListener('click', () => {
      seccionCursos.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  console.log("🚀 Entorno interactivo y estructurado listo para la prueba.");
});


#src/main.js
