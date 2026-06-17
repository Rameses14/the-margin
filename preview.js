/* Shared reader's-eye preview overlay for the editor suite.
   Usage: openPreview(url, label)  — label is shown in the faux URL bar. */
(function () {
  var overlay;

  function build() {
    overlay = document.createElement('div');
    overlay.className = 'pv-overlay';
    overlay.innerHTML =
      '<div class="pv-window" role="dialog" aria-modal="true">' +
        '<div class="pv-bar">' +
          '<span class="pv-tag">Preview</span>' +
          '<div class="pv-dots"><i></i><i></i><i></i></div>' +
          '<div class="pv-url" id="pvUrl"></div>' +
          '<div class="pv-seg" id="pvSeg">' +
            '<button data-d="desktop" class="on">Desktop</button>' +
            '<button data-d="mobile">Mobile</button>' +
          '</div>' +
          '<a class="ext" id="pvExt" target="_blank" rel="noopener">Open ↗</a>' +
          '<button class="x" id="pvClose" aria-label="Close preview">×</button>' +
        '</div>' +
        '<div class="pv-stage" id="pvStage"><iframe id="pvFrame" title="Reader preview"></iframe></div>' +
      '</div>';
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    overlay.querySelector('#pvClose').addEventListener('click', close);
    overlay.querySelector('#pvSeg').addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      overlay.querySelectorAll('#pvSeg button').forEach(function (x) { x.classList.remove('on'); });
      b.classList.add('on');
      overlay.querySelector('#pvStage').classList.toggle('mobile', b.dataset.d === 'mobile');
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  function close() { if (overlay) overlay.classList.remove('show'); }

  window.openPreview = function (url, label) {
    if (!overlay) build();
    overlay.querySelector('#pvFrame').src = url;
    overlay.querySelector('#pvUrl').innerHTML = 'themargin.school<b>/' + (label || '') + '</b>';
    overlay.querySelector('#pvExt').href = url;
    // always reset to desktop on open
    overlay.querySelectorAll('#pvSeg button').forEach(function (x) { x.classList.toggle('on', x.dataset.d === 'desktop'); });
    overlay.querySelector('#pvStage').classList.remove('mobile');
    overlay.classList.add('show');
  };
})();
