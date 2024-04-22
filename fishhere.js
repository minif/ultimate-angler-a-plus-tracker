fishherecheckboxes = [];

initTable = function() {
	checkboxes = JSON.parse(localStorage.getItem("ua_fishcheckboxes"));
	if (checkboxes == null) return;
	loc = localStorage.getItem("ua_fishhere");
	place = Islands.find(obj => {
		return obj.name == loc
	});

	document.getElementById("fishCount").innerText = place.name + " ("+ place.island + ")"
	table = document.getElementById("fishherediv");
	table.innerHTML = "	\
		<th>Fish</th>\
			<th>RD</th>\
			<th>OR</th>\
			<th>YL</th>\
			<th>LG</th>\
			<th>GR</th>\
			<th>BL</th>\
			<th>LB</th>\
			<th>PK</th>\
			<th>PR</th>\
			<th>BR</th>\
			<th>WT</th>\
			<th>BK</th>\
		<th>A+</th>\
		<th>Fish Number</th>\
		</tr>";

	fishherecheckboxes = [];
	for (i of place.fish) {
		row = table.insertRow(-1);
		row.insertCell(-1).innerText = i.propername;
		for (bait of Object.keys(i.bait)) {
			r = row.insertCell(-1)
			if (i.bait[bait]) ic = "X"
			else ic = " "
			r.innerText = ic;
			r.style.color = bait;
			r.style.backgroundColor = "#AAAAAA"
			//if (bait=="white"||bait=="yellow")
		}
		checkboxcell = row.insertCell(-1)
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.fishid = i.id;
		checkbox.checked = checkboxes[i.id];
		checkboxcell.appendChild(checkbox);
		fishherecheckboxes.push(checkbox);
		aid = row.insertCell(-1);
		aid.innerText = i.id;
	}
}

saveCheckBoxes = function() {
	checkboxes = JSON.parse(localStorage.getItem("ua_fishcheckboxes"));
	if (checkboxes == null) return;
	for (i of fishherecheckboxes) {
		id = i.fishid;
		checkboxes[id] = i.checked;
	}

	//Save as Web storage
	localStorage.setItem("ua_fishcheckboxes", JSON.stringify(checkboxes));
	uploadToPHP(function() {
		initTable();
	});
}

 downloadFromPHP(function() {
	 initTable();
 });

