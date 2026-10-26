// On phones and small tablets, start with the help article list folded away under the search box.
// On desktop the list stays open under the search box; if it is taller than the window, scroll the
// list (not the page) so the open section's heading is at the top and the current article shows.
(() => {
  const list = document.querySelector(".helpnav .helpnav-all");
  if (!list) return;
  if (window.matchMedia("(max-width: 1023px)").matches) { list.open = false; return; }
  if (list.scrollHeight <= list.clientHeight) return;
  const top = (el) => el.getBoundingClientRect().top - list.getBoundingClientRect().top + list.scrollTop;
  const section = list.querySelector(".helpnav-sections details[open] > summary");
  const current = list.querySelector('a[aria-current="page"]');
  let y = section ? top(section) : 0;
  if (current && top(current) + current.offsetHeight > y + list.clientHeight) y = top(current) - list.clientHeight / 3;
  list.scrollTop = y;
})();
