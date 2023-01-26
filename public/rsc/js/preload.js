const os_preloader = document.getElementById("os-pre");
const desk_defaultWindow = document.getElementById("defaultWindow");
const os_preloader_txt = document.getElementById("os-pre-text");
const os_desk = document.getElementById("os-desktop");

if (window.CSS && window.CSS.supports && window.CSS.supports('transform', 'translateZ(0)')) {
	const style = `color:white;font-weight:bold;background-color:green;font-size:20px;`;
	console.log('%c Hardware acceleration is enabled.', style);
  } else {
	const errorStyle = `color:white;font-weight:bold;background-color:red;font-size:20px;`;
	console.log('WARNING! HARDWARE EXEMPTION DETECTED! \n %c XENOS MAY NOT FUNCTION AS INTENDED!', errorStyle);
  }
  

function errorHandler(event) {
	event.preventDefault();
	console.log(event);
	const style = `color:white;font-weight:bold;background-color:red;font-size:20px;`;
	console.error(
		"Catastrophic error while initializing \n" +
			event.stack +
			"%c \n CATASTROPHIC ERROR.. XENOS WILL NOT FUNCTION!",
		style
	);
	os_preloader.style.color = "red";
	os_preloader_txt.innerText = "Catastrophic Error!";
}
//window.addEventListener("error", errorHandler);

setTimeout(() => {
	window.removeEventListener("error", errorHandler);
}, 5000);

window.__XEN_WEBPACK.html.os_preloader = os_preloader;
window.__XEN_WEBPACK.html.desk_defaultWindow = desk_defaultWindow;
window.__XEN_WEBPACK.html.os_desk = os_desk;

if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("../../sw.js")
		.then(function (registration) {
			console.log("Service worker registered successfully");
		})
		.catch(function (error) {
			console.log("Service worker registration failed: " + error);
		});
}

navigator.serviceWorker.addEventListener("message", function (event) {
	console.log(event.data.log);
});

setTimeout(() => {
	os_preloader.style.opacity = 0;
	os_desk.style.transition = "all .5s ease 0s;";
}, 3000);

setTimeout(() => {
	os_preloader.style.display = "none";
}, 4000);
