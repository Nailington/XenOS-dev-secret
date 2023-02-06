self.addEventListener("fetch", event => {
	event.respondWith(new Response("The proxy works"));
});
