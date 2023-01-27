window.__XEN_WEBPACK.core.AppManagerComponent = class AMC {
  constructor() {
    this.apps = {
      appsInstalled: [{ WelcomeToXenOS: { repository: "none/preload" } }],
    };
  } // real greenworld!!!!!!!!????


  async #install(author, proj, file, content) {
    navigator.serviceWorker.addEventListener("message", async event => {
      //console.log(event.data);
      console.log("Installed!");
    });

	console.log(author);
	console.log(proj)

    navigator.serviceWorker.ready.then(registration =>
      registration.active.postMessage({
        info: {
          author: author,
          project: proj,
        },
        file: file,
        content: content,
      })
    );
  }

  async install(pkg, repo="https://xenos-app-repository.enderkingj.repl.co") {
    const [author, proj] = pkg.split("/");

    var percent = 0;

    // prefetch app details
    percent += 1;
    console.log(
      `%cXenOS PKG\n%c FETCH: META\n%c${Array.from("x".repeat(percent))
        .map(e => "=")
        .join("")}`,
      "background:white;font-family:sans-serif;color:black;padding:3px;border-radius:4px;font-size:18px;",
      "font-size:16px;color:white;",
      "background: rgb(255, 255, 255, 0.1;font-size:15px;"
    );

    var metaBody = {
      id: pkg,
    };

    var meta = await (
      await fetch(
        repo + "/stream",
        {
          method: "POST",
          body: JSON.stringify(metaBody),
        }
      )
    ).json();
    percent += 19;

    console.log(
      `%c SUCCESS: ${meta.name}\n%c${Array.from("x".repeat(percent))
        .map(e => "=")
        .join("")}%c`,
      "font-size:16px; color:white;",
      "font-size:15px; color:white;",
      "background: rgb(255, 255, 255, 0.1;"
    );

    metaBody.session = meta.session;

    var togo = 100 - percent - 20;
    var per = togo / meta.assets.length;

    for (let asset of meta.assets) {
      metaBody.asset = asset;

      console.log(
        `%c FETCH: ${meta.name}/${asset}\n%c${Array.from(
          "x".repeat(percent)
        )
          .map(e => "=")
          .join("")}%c`,
        "font-size:16px; color:white;",
        "font-size:15px; color:white;",
        "background: rgb(255, 255, 255, 0.1;"
      );

      percent += Math.floor(per);

      var resp = await fetch(
        repo + "/download",
        {
          method: "POST",
          body: JSON.stringify(metaBody),
        }
      );

      var body = await resp.text();

      console.log(
        `%c SUCCESS: ${meta.name}/${asset}\n%c${Array.from(
          "x".repeat(percent)
        )
          .map(e => "=")
          .join("")}%c`,
        "font-size:16px; color:white;",
        "font-size:15px; color:white;",
        "background: rgb(255, 255, 255, 0.1;"
      );

      await this.#install(author, proj, asset, body);
    }

    console.log(
      `%c FETCH: SESSION_CLEAR\n%c${Array.from("x".repeat(percent))
        .map(e => "=")
        .join("")}%c`,
      "font-size:16px; color:white;",
      "font-size:15px; color:white;",
      "background: rgb(255, 255, 255, 0.1;"
    );

    var resp = await fetch(
      repo + "/clear",
      {
        method: "POST",
        body: JSON.stringify(metaBody),
      }
    );

    percent += 20;

    console.log(
      `%c SUCCESS: SESSION_CLEAR\n%c${Array.from("x".repeat(percent))
        .map(e => "=")
        .join("")}%c`,
      "font-size:16px; color:white;",
      "font-size:15px; color:white;",
      "background: rgb(255, 255, 255, 0.1;"
    );

    console.log(
      `%c SUCCESS: ${meta.name} DOWNLOADED\n%c${Array.from(
        "x".repeat(percent)
      )
        .map(e => "=")
        .join("")}%c`,
      "font-size:16px; color:white;",
      "font-size:15px; color:white;",
      "background: rgb(255, 255, 255, 0.1;"
    );
  }

  async open(pkg, callbackFunc, openType) {
    const path = "/apps/" + pkg;
    const meta = await (await fetch(path + "/manifest.json")).json();
    const location = path + "/index.html";
    
if (openType === 'reg') {
   xen.system.register(meta.name, "10", "10", path + "/index.html");
  console.log('deprecated method!')
} else {
  console.log('new')
  const appName = meta.name; 
  		let check = document.getElementById(meta.name);
	   if (check === null) {
		   if ((pkg == null)) {
		  throw new TypeError("Failed to register: \n missing required arguments");
		} else {
		  // Where a new app is created in the UI
		  const os_desk = document.getElementById("os-desktop");
		  try {
			let injectCode = `const thisAppName = this.dataset.appname; console.log(thisAppName);xen.windowManager.focus(thisAppName);xen.windowManager.modifyWindow(thisAppName, "zIndex", this.style.zIndex);xen.windowManager.modifyWindow(thisAppName, "location_x", this.style.left);xen.windowManager.modifyWindow(thisAppName, "location_y", this.style.top);`;
			let closeCode = `xen.system.unregister("${appName}")`
			let miniCode = `
		  xen.windowManager.modifyWindow("${appName}", "minimized", true);
	document.getElementById('${appName}').style.animation = 'minimize 0.1s ease-out'
	requestAnimationFrame(() => {
		setTimeout(() => {
		  document.getElementById('${appName}').style.display = 'none';
	  document.getElementById('${appName}').style.animation = ''
		}, 100);
	  });
			`
			let master = document.createElement("div");
			let headerBox = document.createElement("div");
			let headerTitle = document.createElement("div");
			let headerTitleText = document.createTextNode(appName);
			let boxBody = document.createElement("div");
			let closeSpan = document.createElement("span");
			let miniSpan = document.createElement("span");
			let contentFrame = document.createElement("iframe");
			master.dataset.appname = appName;
	
			master.classList.add("drag");
			master.classList.add("box");
			master.id = appName;
	
			os_desk.appendChild(master);
	
			headerBox.classList.add("box-header");
			headerTitle.classList.add("box-header-title");
			boxBody.classList.add("box-body-inner");
			master.appendChild(headerBox);
			headerBox.appendChild(headerTitle);
			
			
			headerTitle.appendChild(headerTitleText);
			headerTitle.appendChild(closeSpan)
			headerTitle.appendChild(miniSpan)
			closeSpan.classList.add('os-exit')
			miniSpan.classList.add('os-mini')
			closeSpan.setAttribute("onclick", closeCode)
			miniSpan.setAttribute("onclick", miniCode)
			closeSpan.innerHTML = `<svg style="width: 15px;height: 15px;" xmlns="http://www.w3.org/2000/svg" width="188" height="185" viewBox="0 0 188 185" fill="none">
	<rect width="188" height="185" rx="92.5" fill="#F46868"></rect>
	</svg>`
			 miniSpan.innerHTML = `<svg style="width: 15px;height: 15px;" xmlns="http://www.w3.org/2000/svg" width="188" height="185" viewBox="0 0 188 185" fill="none">
	<rect width="188" height="185" rx="92.5" fill="#FFD43C"></rect>
	</svg>`
			headerBox.appendChild(boxBody);
	
			boxBody.appendChild(contentFrame);
			contentFrame.src = location;
			master.setAttribute("onclick", injectCode);
			contentFrame.contentWindow.addEventListener("error", function (event) {
			  console.log("An error occurred in the iframe:", event.message);
			});
			xen.windowManager.addWindow(appName,master,"location_x",posX,"location_y",posY);
		  } catch (e) {
			console.log("Xen Registration Error: \n" + e);
		  }
	
		  os_desk.dispatchEvent(
			new CustomEvent("NewWindow", {
			  window: appName,
			  detail: { text: appName },
			})
		  );
		}
	   } else {
		 if (xen.windowManager.windows[appName].minimized == true) {
		   document.getElementById(appName).style.display = 'block'
		   xen.windowManager.windows[appName].minimized = false; 
		 } else {
			throw new TypeError("Failed to register: \n An app or window with the same name already exists.");
		 }
	   }
	  
}
   
  }
};
