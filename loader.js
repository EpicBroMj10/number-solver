(function () {
  var root = document.getElementById('ntb-root'); if (!root || root.dataset.on) return; root.dataset.on = '1';
  document.body.prepend(root); document.documentElement.classList.add('ntb-on');
  fetch(window.NTB_SITE, { credentials: 'same-origin' }).then(function (r) { return r.text(); }).then(function (html) {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    var scripts = [].slice.call(doc.querySelectorAll('script')); scripts.forEach(function (s) { s.remove(); });
    [].slice.call(doc.head.children).forEach(function (el) { document.head.appendChild(el); });
    while (doc.body.firstChild) root.appendChild(doc.body.firstChild);
    scripts.forEach(function (s) { var n = document.createElement('script'); n.textContent = s.textContent; document.body.appendChild(n); });
    if (location.hash) window.dispatchEvent(new HashChangeEvent('hashchange'));
  });
})();
