const collapsibles = document.querySelectorAll('.collapsible');
  
collapsibles.forEach(collapsible => {
  collapsible.addEventListener('click', () => {
    collapsible.nextElementSibling.classList.toggle('content');
  });
});