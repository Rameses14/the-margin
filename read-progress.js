/* Reading progress: a thin bar across the top of the page that fills left to
   right as you scroll through the article. Auto-injects only on pages with an
   <article>. Works the same on desktop and phone. */
(function () {
  var art = document.querySelector('article.article');
  if (!art) return;

  var bar = document.createElement('div');
  bar.className = 'readbar';
  bar.setAttribute('aria-hidden', 'true');
  var fill = document.createElement('div');
  fill.className = 'readbar-fill';
  bar.appendChild(fill);
  document.body.appendChild(bar);

  function update() {
    var start = art.offsetTop;
    var end = art.offsetTop + art.offsetHeight - window.innerHeight;
    var y = window.scrollY || window.pageYOffset || 0;
    var p = end > start ? (y - start) / (end - start) : 0;
    if (p < 0) p = 0; if (p > 1) p = 1;
    fill.style.width = (p * 100).toFixed(2) + '%';
  }

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
})();
