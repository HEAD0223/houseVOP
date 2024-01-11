// Menu Burger
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// Scroll Change Class
var minOffset = 100;
window.onscroll = function() {
	const header = document.querySelector('.header');
	let activeHeader = header.classList.contains("is_scrolled");
	if (minOffset < document.documentElement.scrollTop ) {
		if (!activeHeader) {
			header.classList.add("is_scrolled");
		}
	} else if (activeHeader) {
		header.classList.remove("is_scrolled");
	}
}