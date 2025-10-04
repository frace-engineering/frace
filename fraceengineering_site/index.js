
const navItems = document.querySelector(".nav-items");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener('click', (event)=> {
	//navItems.style.display = navItems.style.display === 'flex' ? 'none' : 'flex';
	event.stopPropagation();
	navItems.classList.toggle('show');
});

document.addEventListener('click', (event) => {
	if (!navItems.contains(event.target) && !menuToggle.contains(event.target)) {
		navItems.classList.remove('show');
	}
});

