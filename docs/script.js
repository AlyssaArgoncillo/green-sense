// Smooth-scroll
document.addEventListener('click', function(e){
	const a = e.target.closest('a[href^="#"]');
	if (!a) return;
	const href = a.getAttribute('href');
	if (!href || href === '#') return;
	const target = document.querySelector(href);
	if (!target) return;
	e.preventDefault();
	target.scrollIntoView({behavior: 'smooth', block: 'start'});
	try{ history.replaceState(null, '', href); }catch(e){}
});

// Fade-in for problem rows
document.addEventListener('DOMContentLoaded', function(){
	// Observe problem rows, revealable elements, and timeline pieces
	const revealItems = document.querySelectorAll('.problem-row, .reveal, .timeline-section, .timeline-node');
	if ('IntersectionObserver' in window && revealItems.length){
		const io = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting){
					entry.target.classList.add('in-view');
				} else {
					entry.target.classList.remove('in-view');
				}
			});
		}, {threshold: 0.18});
		revealItems.forEach(r => io.observe(r));
	} else {
		revealItems.forEach(r => r.classList.add('in-view'));
	}
});

// Footer year: set current year if present
try{
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;
}catch(e){/* ignore */}


