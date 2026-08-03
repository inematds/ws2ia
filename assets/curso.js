/* INEMA · nucleo v1 do curso: topicos expansiveis, modais e theme toggle.
   Carregar ANTES do learn.js (que so adiciona a camada de aprendizagem). */

function toggleTopic(button) {
  var topicItem = button.closest('.topic-item');
  if (!topicItem) return;
  var explanation = topicItem.querySelector('.topic-explanation');
  if (!explanation) return;
  var moduleCard = button.closest('.bg-dark-800');
  if (moduleCard) {
    moduleCard.querySelectorAll('.topic-explanation.active').forEach(function (exp) {
      if (exp !== explanation) exp.classList.remove('active');
    });
    moduleCard.querySelectorAll('button[aria-expanded="true"]').forEach(function (b) {
      if (b !== button) b.setAttribute('aria-expanded', 'false');
    });
  }
  var willOpen = !explanation.classList.contains('active');
  explanation.classList.toggle('active');
  button.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
}

function openModal(modalId) {
  var m = document.getElementById(modalId);
  if (m) { m.classList.remove('hidden'); document.body.style.overflow = 'hidden'; }
}

function closeModal() {
  document.querySelectorAll('.modal').forEach(function (m) { m.classList.add('hidden'); });
  document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

(function () {
  function initThemeToggle() {
    var btn = document.getElementById('theme-toggle');
    var darkIcon = document.getElementById('theme-toggle-dark-icon');
    var lightIcon = document.getElementById('theme-toggle-light-icon');
    var htmlEl = document.documentElement;
    if (!btn || !darkIcon || !lightIcon) return;
    if (htmlEl.classList.contains('dark')) lightIcon.classList.remove('hidden');
    else darkIcon.classList.remove('hidden');
    btn.addEventListener('click', function () {
      darkIcon.classList.toggle('hidden');
      lightIcon.classList.toggle('hidden');
      htmlEl.classList.toggle('dark');
      var dark = htmlEl.classList.contains('dark');
      htmlEl.style.colorScheme = dark ? 'dark' : 'light';
      try {
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        var p = JSON.parse(localStorage.getItem('inema.prefs') || '{}');
        p.theme = dark ? 'inema-dark' : 'claro';
        localStorage.setItem('inema.prefs', JSON.stringify(p));
      } catch (e) {}
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initThemeToggle);
  else initThemeToggle();
})();
