function getCurrentTime() {
	const date = new Date();
	const options = {
		timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	};
	return date.toLocaleString("en-US", options);
}
document.addEventListener("DOMContentLoaded", function () {
	window.__XEN_WEBPACK.core.VFS("fs");
	const timeText = document.getElementById("timeIndicator");
	function updateTime() {
		timeText.innerText = getCurrentTime();
	}

	setInterval(updateTime, 1000);
	// XEN INIT
	xen.system.begin();

	// Okay, so the Event is now renamed to WindowRegistration, and the event caries the object windowName, (so you'd do `event.windowName`)

	function initWindow(_win) {
		const win = document.getElementById(_win);
		const iframes = document.querySelectorAll("iframe");
		console.log(iframes);
		const navbar = win.querySelector(".box-header-title");
		let startX,
			startY,
			previousX,
			previousY = 0;

		navbar.addEventListener("dblclick", event => {
			const styles = `width: 99.9%; height: 80%; top: 29px; position: absolute; left: 3px;`;
			console.log(win.style);
			if (xen.windowManager.maximizedWindow.name == _win) {
				xen.windowManager.maximizedWindow.name == _win;
				win.style = `width: 613px;height: 518px;z-index: 10;top: 86px;position: absolute;left: 305px;`;
			} else {
				xen.windowManager.maximizedWindow.name == null;
				localStorage.setItem("maximized-window", true);
				win.style = styles;
			}
		});
		navbar.addEventListener("mousedown", e => {
			iframes.forEach(function (iframe) {
				iframe.style.pointerEvents = "none";
			});

			startX = e.clientX - win.offsetLeft;
			startY = e.clientY - win.offsetTop;

			document.addEventListener("mousemove", handleMove, true);
			document.addEventListener("mouseup", () => {
				document.removeEventListener("mouseup", this);
				document.removeEventListener("mousemove", handleMove, true);
			});
		});

		navbar.addEventListener("mouseup", e => {
			iframes.forEach(function (iframe) {
				iframe.style.pointerEvents = "auto";
			});
		});

		const handleMove = e => {
			let elmTop = win.style.top.split("px")[0];
			let elmLeft = win.style.left.split("px")[0];
			let boundsTop = elmTop < 30;
			let boundsLeft =
				elmLeft < 0 || elmLeft > screen.width - win.offsetWidth;

			let left = e.clientX - startX;
			let top = e.clientY - startY;

			requestAnimationFrame(() => {
				win.style.position = `absolute`;

				win.style.top = top + "px";
				win.style.left = left + "px";
			});
		};
	}

	const os_desk = document.getElementById("os-desktop");
	os_desk.addEventListener("NewWindow", e => {
		console.log(e.detail.text);
		initWindow(e.detail.text);
	});

	initWindow("defaultWindow");
});

const btn = document.getElementById("launchpadButton");
const lp = document.getElementById("launchpad-overlay");

console.log(btn);

// btn.addEventListener("click", function (e) {
//   console.log('click')
//   if (lp.style.display == 'flex') {
//       xen.system.launchpad(false)
//   } else {
//       xen.system.launchpad(true)
//   }

// });
