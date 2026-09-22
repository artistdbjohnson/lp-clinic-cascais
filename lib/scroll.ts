export function syncStickyNavHeight(node: HTMLElement) {
  const h = Math.ceil(node.getBoundingClientRect().height);
  document.documentElement.style.setProperty("--sticky-nav-height", `${h}px`);
}

export function scrollToAnchor(id: string, behavior: ScrollBehavior = "smooth") {
  const node = document.getElementById(id);
  if (!node) return;
  node.scrollIntoView({ behavior, block: "start" });
}
