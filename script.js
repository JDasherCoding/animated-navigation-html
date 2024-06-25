const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const navItems = document.querySelectorAll(".navItem");

// Control Navigation Animation
function navAnimation(direction1, direction2) {
	navItems.forEach((nav, idx) => {
		nav.classList.replace(
			`slide-${direction1}-${idx + 1}`,
			`slide-${direction2}-${idx + 1}`
		);
	});
}

function toggleNav() {
	// Toggle: Menu Bars Open/Closed
	menuBars.classList.toggle("change");
	// Toggle: Menu Active
	overlay.classList.toggle("overlay-active");
	if (overlay.classList.contains("overlay-active")) {
		// Animate In - Overlay
		overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
		// Animate In - Nav Items
		navAnimation("out", "in");
	} else {
		overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
		// Animate In - Nav Items
		navAnimation("in", "out");
	}
}

// EventListeners
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
	nav.addEventListener("click", toggleNav);
});
