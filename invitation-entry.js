(function () {
  function showCover() {
    try {
      window.history.scrollRestoration = "manual";
      if (["#utama", "#majlis", "#rsvp", "#ucapan"].indexOf(window.location.hash) !== -1) {
        window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search);
      }
    } catch (_) {}
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }

  // Runs before the page body, preventing a saved fragment from skipping the cover.
  showCover();
  window.addEventListener("pageshow", function (event) {
    // Returning from the browser cache should also start at the invitation cover.
    if (event.persisted) showCover();
  });
})();
