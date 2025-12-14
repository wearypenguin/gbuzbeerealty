// AJAX submission for Formspree with inline status messages
(function(){
	function $(sel, ctx){ return (ctx||document).querySelector(sel); }
	function showStatus(msg, ok){
		var box = $('#form-status');
		if(!box) return;
		box.classList.remove('success','error');
		box.textContent = msg;
		box.classList.add(ok ? 'success' : 'error');
		box.style.display = 'block';
	}
	function clearStatus(){ var box = document.getElementById('form-status'); if(box) { box.textContent=''; box.style.display='none'; box.classList.remove('success','error'); } }

	function wire(){
		var form = document.getElementById('contact-form');
		if(!form) return;
		form.addEventListener('submit', async function(e){
			e.preventDefault();
			clearStatus();
			var submitBtn = form.querySelector('button[type="submit"]');
			var prev = submitBtn ? submitBtn.textContent : '';
			if(submitBtn){ submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }

			try {
				var data = new FormData(form);
				// Formspree AJAX endpoint expects Accept: application/json for JSON responses
				var res = await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
				if(res.ok){
					form.reset();
					showStatus('Thanks! Your message was sent successfully.', true);
				} else {
					var j = await res.json().catch(function(){ return {}; });
					var err = (j && j.errors && j.errors.map(function(e){return e.message;}).join(', ')) || 'Something went wrong.';
					showStatus('Sorry, we could not send your message. ' + err, false);
				}
			} catch(err){
				showStatus('Network error. Please try again in a moment.', false);
			} finally {
				if(submitBtn){ submitBtn.disabled = false; submitBtn.textContent = prev || 'Send message'; }
			}
		});
	}

	if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire);
	else wire();
})();
