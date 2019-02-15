menu.onclick = function myFunction() {
	var x = document.getElementById('topnav');
	if (x.className === "nav") {
		x.className += " pop-up-menu";
	} else {
		x.className = "nav";
	}
}