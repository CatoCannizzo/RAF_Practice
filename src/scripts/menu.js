// This script controls the hamburger menu for narrow screens
document.querySelector(".hamburger").addEventListener("click", () => {
	document.querySelector(".nav-links").classList.toggle("expanded");
	document.querySelector(".nav-head").classList.toggle("expanded2");
});
