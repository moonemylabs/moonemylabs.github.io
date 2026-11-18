// Idioma de la página: el del navegador, o el último elegido.
(function () {
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var lang = saved || ((navigator.language || 'es').toLowerCase().indexOf('es') === 0 ? 'es' : 'en');
  function set(l) {
    document.documentElement.setAttribute('data-lang', l);
    document.documentElement.lang = l;
    document.querySelectorAll('.langs button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.l === l ? 'true' : 'false');
    });
    try { localStorage.setItem('lang', l); } catch (e) {}
  }
  set(lang);
  document.addEventListener('DOMContentLoaded', function () {
    set(lang);
    document.querySelectorAll('.langs button').forEach(function (b) {
      b.addEventListener('click', function () { lang = b.dataset.l; set(lang); });
    });
  });
})();
