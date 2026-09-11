// The PDF artwork is the single visual source for this exact-design build.
// Hotspots provide navigation without changing the supplied artwork.
document.querySelectorAll('a.hotspot').forEach(link=>{
  link.addEventListener('click',()=>{
    document.body.dataset.lastAction=link.getAttribute('aria-label')||'navigation';
  });
});