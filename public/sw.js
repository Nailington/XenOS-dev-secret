/*
AppManager.setDefaultRepo();
AppManager.addRepo();
*/

self.addEventListener("fetch", event => {
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
						`((null, null) => { ${body} })(globalThis, parent);`,
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
	const { manifest, file, content } = event.data;

	const url = `/apps/${manifest.publisher}/${manifest.project}/${file}`;

	console.log(url);

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
