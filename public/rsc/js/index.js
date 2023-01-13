
document.addEventListener("DOMContentLoaded", function() {

	// XEN INIT
	xen.system.begin()


	// Okay, so the Event is now renamed to WindowRegistration, and the event caries the object windowName, (so you'd do `event.windowName`) 

	function initWindow(_win) {
    const win = document.getElementById(_win);
    const iframe = document.querySelector("iframe");
		const navbar = win.querySelector(".box-header-title");
	let startX, startY;

navbar.addEventListener("mousedown", (e) => {
  startX = e.pageX - win.offsetLeft;
  startY = e.pageY - win.offsetTop;

  document.addEventListener("mousemove", handleMove, true);
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mouseup", this);
    document.removeEventListener("mousemove", handleMove, true);
  });
});

const handleMove = (e) => {
  let left = e.pageX - startX;
  let top = e.pageY - startY;
  
  if ((top > 0 && top < screen.height - win.offsetHeight) && (left > 0 && left + win.offsetWidth < screen.width))
  requestAnimationFrame(() => {
        win.style.cssText = `position: absolute; top: ${top}px; left: ${left}px;`;
    });
}

    
	}
 

  
const os_desk = document.getElementById("os-desktop");
	 os_desk.addEventListener("NewWindow", (e) => {
     
     console.log(e.detail.text)
		initWindow(e.detail.text);
	})
	
	initWindow('defaultWindow');
});

const btn = document.getElementById('launchpad-button');
btn.addEventListener("click", function(e) { 
 xen.system.launchpad();
})