/* Menú móvil: alterna la navegación en pantallas pequeñas.
   Progresivo: si el JS no carga, los enlaces siguen visibles en escritorio. */
(function () {
  var toggle = document.querySelector('.nav__toggle');
  var list = document.getElementById('nav-list');
  if (!toggle || !list) return;

  toggle.addEventListener('click', function () {
    var open = list.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Cierra el menú al pulsar un enlace (navegación en la misma o nueva página)
  list.addEventListener('click', function (e) {
    if (e.target.closest('.nav__link')) {
      list.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Cierra con la tecla Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && list.classList.contains('is-open')) {
      list.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
})();
