update = function() {
	document.getElementById("current-url").innerText = 
		"Current URL: "+ua_url
}

updateURL = function() {
	ua_url = document.getElementById("url-set").value;
	localStorage.setItem("ua_url",ua_url);
	update()
}

clearURL = function() {
	ua_url = null
	localStorage.removeItem("ua_url");
	update()
}

update();