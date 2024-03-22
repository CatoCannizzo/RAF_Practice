// This script controls the hamburger menu for narrow screens
document.getElementById("hamburger").addEventListener("click", () => {
	document.getElementById("nav-head").classList.toggle("flex");
	document.getElementById("nav-head").classList.toggle("hidden");
	document.getElementById("web-title").classList.toggle("hidden");
});
