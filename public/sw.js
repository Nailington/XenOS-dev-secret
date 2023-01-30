self.addEventListener('activate', () => self.clients.claim());

console.log('XenOS v1.0.0 SW Loaded!')

self.addEventListener("fetch", event => {
  console.log(event.request.url)
	event.respondWith(
		(async () => {
			const req = event.request;
			const path = new URL(req.url).pathname;

			const cacheResp = await caches.match(path, {
				cacheName: "apps",
			});

			if (cacheResp && path.startsWith("/apps/")) {
				// Setup jail
				if (
					cacheResp.headers
						.get("content-type")
						.match(/^(?:text|application)\/javascript/g)
				) {
					const body = await cacheResp.text();

					return new Response(
						`
// SDK
// TODO: Have fallbacks for non module scripts
//import xen from "./sdk.ts";

// Jail
/*((globalThis, parent) => { ${body} })(null, null);*/
${body}
`,
						{
							headers: { ...cacheResp.headers },
						}
					);
				}

				return cacheResp;
			}

			// Offline support
			return await fetch(req).catch(err => {
				return caches.match(event.request);
			});
		})()
	);
});

function getContentType(file) {
	if (file.endsWith(".html")) return "text/html";
	if (file.endsWith(".css")) return "text/css";
	if (file.endsWith(".js")) return "application/javascript";
	// TODO: Add more types
	return "text/plain";
}

// Install
self.addEventListener("message", async event => {
	var { info, file, content } = event.data, { entry } = info;

  console.log(file, entry)

  if (file==entry) {
    content = `
    
var _xen = window.xen;
var _import_xen = _xen.apps.loader;
var { window: BrowserWindow } = _import_xen;


(function(xen) {

  xen.BrowserWindow = class BROWIN extends _import_xen.window {
    constructor(...args) {
      super(...args, name);
    }
  }
  ${content}
})({BrowserWindow});
    `
  }

	const url = `/apps/${info.author}/${info.project}/${file}`;

	caches.open("apps").then(cache => {
		cache.put(
			url,
			new Response(content, {
				headers: {
					"content-type": getContentType(file),
				},
			})
		);
	});

	// Notify that the file has been installed
	event.source.postMessage(url);
});

// Immediately apply updates
self.addEventListener("install", event => self.skipWaiting());
