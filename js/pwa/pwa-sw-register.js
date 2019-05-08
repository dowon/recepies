// This is the "Offline copy of pages" service worker

// Add this below content to your HTML page, or add the js file to your page at the very top to register service worker

// Check compatibility for the browser we're running this in
if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    console.log("[PWA] active service worker found, no need to register");
  } else {
    // Register the service worker
    navigator.serviceWorker
      .register("js/pwa/pwa-sw.js", {
        scope: "./"
      }) .then (reg) => {
        console.log("[PWA Builder] Service worker has been registered for scope:");
        console.log (reg);
      });
      .catch(error) =>{
        console.log('si è verificato un errore del tipo')
      }
  }
}
