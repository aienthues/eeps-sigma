(function () {
  // theme toggle (per-viewer preference; storage is optional)
  var root = document.documentElement;
  var btn = document.querySelector('[data-theme-toggle]');
  if (btn) btn.addEventListener('click', function () {
    var dark = root.dataset.theme ? root.dataset.theme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (_) {}
  });

  // catalogue search + filters
  var list = document.querySelector('[data-rule-list]');
  if (list) {
    var rows = Array.prototype.slice.call(list.querySelectorAll('a.rule-row'));
    var input = document.querySelector('[data-search-input]');
    var empty = list.querySelector('[data-empty]');
    var state = { filter: 'all', value: null, q: '' };
    var apply = function () {
      var shown = 0;
      rows.forEach(function (r) {
        var okF = state.filter === 'all' || r.dataset[state.filter] === state.value;
        var okQ = !state.q || r.dataset.search.indexOf(state.q) !== -1;
        r.hidden = !(okF && okQ);
        if (!r.hidden) shown++;
      });
      if (empty) empty.hidden = shown !== 0 || rows.length === 0;
    };
    document.querySelectorAll('.f').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('.f').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        state.filter = b.dataset.filter; state.value = b.dataset.value || null;
        apply();
      });
    });
    if (input) input.addEventListener('input', function () { state.q = input.value.trim().toLowerCase(); apply(); });
  }

  // tabs
  document.querySelectorAll('.tab').forEach(function (t) {
    t.addEventListener('click', function () {
      document.querySelectorAll('.tab').forEach(function (x) { x.classList.remove('on'); x.setAttribute('aria-selected', 'false'); });
      t.classList.add('on'); t.setAttribute('aria-selected', 'true');
      document.querySelectorAll('.pane').forEach(function (p) { p.hidden = p.dataset.pane !== t.dataset.tab; });
    });
  });

  // copy
  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var code = b.closest('.pane').querySelector('code').innerText;
      var done = function () { b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy'; }, 1500); };
      if (navigator.clipboard) navigator.clipboard.writeText(code).then(done, function () {});
    });
  });
})();
