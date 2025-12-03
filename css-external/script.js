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

