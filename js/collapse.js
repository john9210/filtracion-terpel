// Función para abrir el collapse según los parámetros de la URL
function openCollapseFromParams() {
    const params = new URLSearchParams(window.location.search);
    const collapseId = params.get('collapse');
    
    if (collapseId) {
      // Cerrar todos los collapses primero
      const collapses = document.querySelectorAll('.accordion-collapse');
      collapses.forEach(collapse => {
        const id = collapse.getAttribute('id');
        const bsCollapse = new bootstrap.Collapse(document.getElementById(id), {
          toggle: false
        });
        bsCollapse.hide();
      });
  
      // Abrir el collapse especificado
      const bsCollapse = new bootstrap.Collapse(document.getElementById(collapseId), {
        toggle: true
      });
      bsCollapse.show();
    }
  }
  
  // Llamar a la función cuando se cargue la página
  window.addEventListener('load', openCollapseFromParams);
  