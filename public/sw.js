self.addEventListener("activate", () => self.clients.claim());

self.addEventListener("fetch", event => {
	const req = event.request;

	event.respondWith(
		(async () => {
			const path = new URL(req.url).pathname;

			const cacheResp = await caches.match(path, {
				cacheName: "apps",
			});

			if (cacheResp && path.startsWith("/apps/")) {
				const body = await cacheResp.text();

				// Setup jail
				if (
					cacheResp.headers
						.get("content-type")
						.match(/^(?:text|application)\/javascript/g)
				) {
					console.log({ ...cacheResp.headers });

					return new Response(
						`
// SDK
// TODO: Have fallbacks for non module scripts
import xen from "./bundle.sdk.js";

// Jail
/*((globalThis, parent) => { ${body} })(null, null);*/
${body}
`,
						{
							headers: {
								"content-type": getContentType(req.url),
							},
						}
					);
				}

				return new Response(body, {
					headers: {
						"content-type": getContentType(req.url),
					},
				});
			}

			// Offline support
			return await fetch(req).catch(err => {
				return caches.match(req);
			});
		})()
	);
});

// Install
self.addEventListener("message", async event => {
	var { info, file, content } = event.data;

  if (file==info.entry) {
    content = `
var _xen = window.xen;
var _import_xen = _xen.apps.loader;
var { window: BrowserWindow } = _import_xen;
(function(xen) {
  xen.BrowserWindow = class BROWIN extends _import_xen.window {
    constructor(...args) {
      super(...args, name, path);
    }
  }
  ${content}
})({BrowserWindow});
    `
  }

	console.log(event.data);

	const url = `/apps/${info.author}/${info.project}/${file}`;

	caches.open("apps").then(cache => {
		cache.put(url, new Response(content));
	});

	// Notify that the file has been installed
	event.source.postMessage(url);
});

// Immediately apply updates
self.addEventListener("install", event => self.skipWaiting());

function getContentType(file) {
	console.log(file);
	if (file.endsWith(".html")) return "text/html";
	if (file.endsWith(".css")) return "text/css";
	if (file.endsWith(".js")) return "application/javascript";
	// TODO: Add more types
	return "text/plain";
}
