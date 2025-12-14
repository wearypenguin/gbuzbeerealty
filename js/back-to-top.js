// Back to top button logic (appears after scrolling)
(function(){
	var btn;
	function ensure(){
		btn = document.getElementById('back-to-top');
		if(!btn){
			btn = document.createElement('button');
			btn.id = 'back-to-top';
			btn.className = 'back-to-top';
			btn.type = 'button';
			btn.setAttribute('aria-label','Back to top');
			btn.textContent = '↑';
			document.body.appendChild(btn);
		}
	}
	function onScroll(){
		if(!btn) return; 
		var y = window.scrollY || document.documentElement.scrollTop;
		if(y > 200) btn.classList.add('is-visible'); else btn.classList.remove('is-visible');
	}
	function onClick(){
		var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if(reduce) { window.scrollTo(0,0); return; }
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	function wire(){
		ensure();
		btn.addEventListener('click', onClick);
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
	}
	if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire);
	else wire();
})();
