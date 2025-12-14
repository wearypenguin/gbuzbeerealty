// Accessible hamburger navigation for small screens + dropdown support
(function(){
	function wire(){
		var toggle = document.getElementById('nav-toggle');
		var panel = document.getElementById('primary-nav');
		if(!toggle || !panel) return false;

		function close(){
			toggle.setAttribute('aria-expanded','false');
			panel.classList.remove('is-open');
		}
		function open(){
			toggle.setAttribute('aria-expanded','true');
			panel.classList.add('is-open');
		}
		function isOpen(){ return toggle.getAttribute('aria-expanded') === 'true'; }

		toggle.addEventListener('click', function(){ isOpen() ? close() : open(); });
		document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && isOpen()) close(); });
		document.addEventListener('click', function(e){
			if(!isOpen()) return;
			if(e.target === toggle || panel.contains(e.target)) return;
			close();
		});

		// Initial state: show inline on desktop, closed on mobile
		var lastIsMobile = window.innerWidth < 768;
		if(lastIsMobile) close(); else { toggle.setAttribute('aria-expanded','false'); panel.classList.remove('is-open'); }
		window.addEventListener('resize', function(){
			var isMobile = window.innerWidth < 768;
			if(isMobile !== lastIsMobile){
				if(!isMobile){
					// Desktop: ensure inline (CSS handles layout); keep hamburger collapsed state
					panel.classList.remove('is-open');
					toggle.setAttribute('aria-expanded','false');
				} else {
					// Back to mobile default (closed)
					panel.classList.remove('is-open');
					toggle.setAttribute('aria-expanded','false');
				}
				lastIsMobile = isMobile;
			}
		});
		return true;
	}

	// Dropdown functionality
	function wireDropdowns(){
		var dropdowns = document.querySelectorAll('.nav-dropdown');
		
		dropdowns.forEach(function(dropdown){
			var trigger = dropdown.querySelector('.nav-dropdown-trigger');
			var menu = dropdown.querySelector('.nav-dropdown-menu');
			
			if(!trigger || !menu) return;
			
			// Handle both click and hover for desktop, click only for mobile
			var isMobile = window.innerWidth < 768;
			
			trigger.addEventListener('click', function(e){
				// On desktop, if clicking the dropdown arrow area, prevent navigation and toggle dropdown
				if(!isMobile){
					var rect = trigger.getBoundingClientRect();
					var clickX = e.clientX - rect.left;
					var arrowStart = rect.width - 30; // Approximate arrow area
					
					if(clickX > arrowStart){
						e.preventDefault();
						toggleDropdown();
						return;
					}
				}
				// On mobile, allow navigation to showcase page (don't prevent default)
				// Items are always visible via CSS
			});
			
			function toggleDropdown(){
				var isOpen = menu.classList.contains('is-open');
				
				// Close all other dropdowns
				dropdowns.forEach(function(otherDropdown){
					if(otherDropdown !== dropdown){
						otherDropdown.querySelector('.nav-dropdown-menu').classList.remove('is-open');
						otherDropdown.querySelector('.nav-dropdown-trigger').setAttribute('aria-expanded', 'false');
					}
				});
				
				// Toggle current dropdown
				if(isOpen){
					menu.classList.remove('is-open');
					trigger.setAttribute('aria-expanded', 'false');
				} else {
					menu.classList.add('is-open');
					trigger.setAttribute('aria-expanded', 'true');
				}
			}
			
			// Desktop hover behavior
			if(!isMobile){
				dropdown.addEventListener('mouseenter', function(){
					menu.classList.add('is-open');
					trigger.setAttribute('aria-expanded', 'true');
				});
				
				dropdown.addEventListener('mouseleave', function(){
					menu.classList.remove('is-open');
					trigger.setAttribute('aria-expanded', 'false');
				});
			}
			
			// Close dropdown on escape or outside click
			document.addEventListener('keydown', function(e){
				if(e.key === 'Escape' && menu.classList.contains('is-open')){
					menu.classList.remove('is-open');
					trigger.setAttribute('aria-expanded', 'false');
				}
			});
			
			document.addEventListener('click', function(e){
				if(!dropdown.contains(e.target) && menu.classList.contains('is-open')){
					menu.classList.remove('is-open');
					trigger.setAttribute('aria-expanded', 'false');
				}
			});
			
			// Update mobile detection on resize
			window.addEventListener('resize', function(){
				isMobile = window.innerWidth < 768;
			});
		});
	}

	if(!wire()){
		if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire);
		else wire();
	}

	if(document.readyState === 'loading'){
		document.addEventListener('DOMContentLoaded', wireDropdowns);
	} else {
		wireDropdowns();
	}
})();
