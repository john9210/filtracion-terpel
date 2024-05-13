function goTo(page, param1, param2, param3) {
  let url = page + '.html';
  
  if (param1) {
    url += '?param1=' + encodeURIComponent(param1);
  }
  if (param2) {
    url += '&param2=' + encodeURIComponent(param2);
  }
  if (param3) {
    url += '&param3=' + encodeURIComponent(param3);
  }
  
  window.location.href = url;
}