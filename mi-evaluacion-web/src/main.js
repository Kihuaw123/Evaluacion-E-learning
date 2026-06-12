// Agregar interactividad cuando cargue el documento
document.addEventListener('DOMContentLoaded', () => {
  const btnCursos = document.getElementById('btn-cursos');
  
  if (btnCursos) {
    btnCursos.addEventListener('click', () => {
      // Hace scroll suave hasta la sección de cursos destacados
      document.getElementById('seccion-cursos').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
  
  console.log("E-Learning interactivo cargado con éxito.");
});