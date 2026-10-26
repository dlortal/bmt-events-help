// On phones and small tablets, start with the help article list folded away under the search box.
// On desktop the list stays open and scrolls with the page.
(() => {
  const list = document.querySelector(".helpnav .helpnav-all");
  if (list && window.matchMedia("(max-width: 1023px)").matches) list.open = false;
})();
