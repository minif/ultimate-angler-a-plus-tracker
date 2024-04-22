var resp;

ua_url = localStorage.getItem("ua_url")

function uploadToPHP(callback) {
	if (ua_url==null){
		callback();	
		return;
	}
	fetch(ua_url + "ua-upload.php", {
		method: 'POST',
		body: localStorage.getItem("ua_fishcheckboxes")
	}).then((response) => {
		console.log("Uploaded!")
		resp = response;
		callback();
	})

}

function downloadFromPHP(callback) {
	if (ua_url==null){
		callback();
		return;	
	}
	fetch(ua_url + "ua-download.php")
		.then((response) => response.json())
		.then((json) => {
			localStorage.setItem("ua_fishcheckboxes", JSON.stringify(json))
			console.log("Downloaded!")
			callback(json);
		});
}