// Dark/Light mode toggle for Gator Websites
// Usage: Include this script and add a button with id="theme-toggle".
(function () {
	var STORAGE_KEY = 'gw_theme';
	var root = document.documentElement;

	function setTheme(theme) {
		root.setAttribute('data-theme', theme);
		try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
	}

	function getPreferredTheme() {
		try {
			var saved = localStorage.getItem(STORAGE_KEY);
			if (saved === 'light' || saved === 'dark') return saved;
		} catch (e) {}
		return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'dark'; // default to dark if no saved preference
	}

	// Initialize early
	setTheme(getPreferredTheme());

	// Wire up toggle if present
	function wire() {
		var btn = document.getElementById('theme-toggle');
		if (!btn) return;
		function renderLabel(theme) {
			var isDark = theme === 'dark';
			var emoji = isDark ? '🌙' : '☀️';
			// Emoji-only label per request; keep accessible name via aria-label
			btn.textContent = emoji;
			btn.setAttribute('aria-pressed', String(isDark));
		}
		// initial label
		renderLabel(root.getAttribute('data-theme'));
		btn.addEventListener('click', function () {
			var next = (root.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
			setTheme(next);
			renderLabel(next);
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', wire);
	} else {
		wire();
	}
})();
