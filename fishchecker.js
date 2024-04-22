fishcheckboxes = [];

function upload() {
	//Upload file
	var selectedFile = document.getElementById('input').files[0];
	var reader = new FileReader();
	reader.onload = function(e) {
		localStorage.setItem("ua_fishcheckboxes", e.target.result);
		populateCheckBoxes();
		updateCount("");
		uploadToPHP(function() { });
	}
	reader.readAsText(selectedFile);

}

function download() {
	saveCheckBoxes();
	var a = document.createElement("a");
	var file = new Blob([localStorage.getItem("ua_fishcheckboxes")], { type: "file" });
	a.href = URL.createObjectURL(file);
	a.download = "download.txt";
	a.click();
}

getAPlusCount = function() {
	fishCount = 0;
	aplusCount = 0;
	for (i in fishcheckboxes) {
		fishCount++;
		if (fishcheckboxes[i].checked) {
			aplusCount++;
		}
	}
	return aplusCount + "/" + fishCount;
}

populateCheckBoxes = function() {
	checkboxes = JSON.parse(localStorage.getItem("ua_fishcheckboxes"));
	if (checkboxes == null) return;
	for (i in fishcheckboxes) {
		id = parseInt(i) + 1;
		if (checkboxes != null)
			fishcheckboxes[i].checked = checkboxes[id]
	}
}

saveCheckBoxes = function() {
	objToSave = {};
	for (i in fishcheckboxes) {
		id = parseInt(i) + 1;
		objToSave[id] = fishcheckboxes[i].checked;
	}

	//Save as Web storage
	localStorage.setItem("ua_fishcheckboxes", JSON.stringify(objToSave));
	uploadToPHP(function() {});
	updateCount("") 
}

updateCount = function(append) {
	document.getElementById("fishCount").innerText = getAPlusCount() + append;
}

genCheckBoxes = function() {
	fishcheckboxes = [];
	fishl = Object.keys(species)
	for (i in fishl) {
		fish = fishl[i];

		//Generate checkbox
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.onclick = function() { updateCount("*") };
		var label = document.createElement("a");

		label.innerText = fish;

		var div = document.createElement("div");
		div.appendChild(checkbox);
		div.appendChild(label);

		document.getElementById("fishdiv").appendChild(div);

		fishcheckboxes.push(checkbox);
	}
	populateCheckBoxes();
	updateCount("");
}

downloadFromPHP(function() {
	genCheckBoxes()
});