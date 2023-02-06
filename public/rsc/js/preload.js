const preloader = document.getElementById("os-pre");
const desk_defaultWindow = document.getElementById("defaultWindow");
const os_preloader_txt = document.getElementById("os-pre-text");
const desk = document.getElementById("os-desktop");

if (
	window.CSS &&
	window.CSS.supports &&
	window.CSS.supports("transform", "translateZ(0)")
) {
	const style = `color:white;font-weight:bold;background-color:green;font-size:20px;`;
	console.log("%c Hardware acceleration is enabled.", style);
} else {
	const errorStyle = `color:white;font-weight:bold;background-color:red;font-size:20px;`;
	console.log(
		"WARNING! HARDWARE EXEMPTION DETECTED! \n %c XENOS MAY NOT FUNCTION AS INTENDED!",
		errorStyle
	);
}

function errorHandler(event) {
	event.preventDefault();

	const style = `color:white;font-weight:bold;background-color:red;font-size:20px;`;
	console.error(
		"Catastrophic error while initializing \n" +
			event.stack +
			"%c \n CATASTROPHIC ERROR.. XENOS WILL NOT FUNCTION!",
		style
	);

	preloader.style.color = "red";
	os_preloader_txt.innerText = "Catastrophic Error!";
}
//window.addEventListener("error", errorHandler);

setTimeout(() => {
	window.removeEventListener("error", errorHandler);
}, 5000);

window.__XEN_WEBPACK.html.os_preloader = preloader;
window.__XEN_WEBPACK.html.desk_defaultWindow = desk_defaultWindow;
window.__XEN_WEBPACK.html.os_desk = desk;

navigator.serviceWorker.addEventListener("message", function (event) {
	console.log(event.data.log);
});

setTimeout(() => {
	preloader.style.opacity = 0;
	desk.style.transition = "all .5s ease 0s;";
}, 3000);

setTimeout(() => {
	preloader.style.display = "none";
}, 4000);
