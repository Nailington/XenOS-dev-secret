// NON JQEURY
const os_preloader = document.getElementById("os-pre");
const desk_defaultWindow = document.getElementById("defaultWindow");
const os_desk = document.getElementById("os-desktop");

window.__XEN_WEBPACK.html.os_preloader = os_preloader;
window.__XEN_WEBPACK.html.desk_defaultWindow = desk_defaultWindow;
window.__XEN_WEBPACK.html.os_desk = os_desk;

window.__XEN_WEBPACK.core.draggable = require('./draggable.js');

setTimeout(() => {
  os_preloader.style.opacity = 0;
   os_desk.style.transition = "1s";
  os_desk.style.display = "block";
}, 3000);


setTimeout(() => {
  os_preloader.style.display = 'none'
  }, 4000);

