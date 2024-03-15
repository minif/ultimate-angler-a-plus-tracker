baitThisRun = {};
CLEANUP_WEIGHT = 0;
function scoreCompare(a, b) {
	if (a.score < b.score) {
		return 1;
	}
	if (a.score > b.score) {
		return -1;
	}
	return 0;
}

baitMap = {
	red: 1,
	orange: 2,
	yellow: 3,
	lightgreen: 4,
	green: 5,
	blue: 6,
	lightblue: 7,
	pink: 8,
	purple: 9,
	brown: 10,
	white: 11,
	black: 12,
}

resetBait = function() {
	baitThisRun = {
		red: 0,
		orange: 0,
		yellow: 0,
		lightgreen: 0,
		green: 0,
		blue: 0,
		lightblue: 0,
		pink: 0,
		purple: 0,
		brown: 0,
		white: 0,
		black: 0,
	}
	updateBaitDisplay();
}

initButtons = function() {
	buttonDiv = document.getElementById("baitadder");
	for (bait of Object.keys(baitMap)) {
		//Create button
		var button = document.createElement("button");
		button.id = "bait" + bait;
		button.onclick = function() { updateBait(this.bait) };
		button.innerText = bait;
		button.bait = bait;
		buttonDiv.appendChild(button);
	}
}

cleanupToggle = function() {
	if (CLEANUP_WEIGHT == 0) CLEANUP_WEIGHT = 100;
	else CLEANUP_WEIGHT = 0;
	updateBaitDisplay();
}

updateBait = function(baitname) {
	baitCount = 0;
	for (i of Object.values(baitThisRun)) {
		baitCount += i;
	}
	if (baitCount < 10) {
		baitThisRun[baitname]++;
	}
	updateBaitDisplay();
}

fishHere = function(place) {
	localStorage.setItem("ua_fishhere", place);
	window.location.href = "fishhere.html";
}

rankIslands = function() {
	baitLists = Object.keys(baitMap);
	islandRanks = [];
	checkboxes = JSON.parse(localStorage.getItem("ua_fishcheckboxes"));
	if (checkboxes == null) {
		document.getElementById("baitthisrun").innerText = "To begin, select A+ fish you have already caught.";
		return;
	}
	for (i in Islands) {
		islandToRank = {};
		islandToRank.name = Islands[i].name;
		islandToRank.island = Islands[i].island;
		islandScore = 0;
		baitRank = {};
		//0=not used, 1 = non-exclusive, 2 = exclusive
		for (baitName of baitLists) {
			baitExists = false;
			baitHasNeed = false;
			isExclusive = true;
			for (fish of Islands[i].fish) {
				fishHasBait = fish.bait[baitName];
				fishAlreadyAPlus = checkboxes[fish.id];
				if (!fishAlreadyAPlus) {
					baitHasNeed = true;
				}
				if (fishHasBait) {
					baitExists = true;
					if (fishAlreadyAPlus) {
						isExclusive = false;
					}
				}
			}
			baitRankInt = 0;
			if (baitExists) {
				baitRankInt = 1;
				if (isExclusive) {
					baitRankInt = 2;
				}
			}
			if (!baitHasNeed) baitRankInt = 0;
			baitRank[baitName] = baitRankInt;
		}
		//Determine how many a+ there are
		islandAplus = 0;
		islandTotalFish = 0;
		islandAPlusList = [];
		for (fish of Islands[i].fish) {
			islandTotalFish++;
			fishAlreadyAPlus = checkboxes[fish.id];
			if (fishAlreadyAPlus) {
				islandAplus++;
				islandAPlusList.push(fish.name);
			}
		}
		islandToRank.islandAplusFish = islandAPlusList;
		islandToRank.fishCount = islandTotalFish;
		islandToRank.aplusCount = islandAplus;
		//Determine Island Rank
		islandToRank.rank = baitRank;
		islandExclusives = 0;
		islandNonExclusives = 0
		for (baitName of Object.keys(baitThisRun)) {
			baitsOfThisType = baitThisRun[baitName];
			rank = baitRank[baitName];
			if (rank == 2) islandExclusives += baitsOfThisType;
			else if (rank == 1) islandNonExclusives += baitsOfThisType;
		}
		islandScore += islandExclusives * 100 * (1 + (islandAplus / islandTotalFish) * CLEANUP_WEIGHT);
		islandScore += islandNonExclusives * 30 * (1 + (islandAplus / islandTotalFish) * CLEANUP_WEIGHT);
		islandToRank.exclusives = islandExclusives;
		islandToRank.nonExclusives = islandNonExclusives;
		//Use already caught A+ as part of rank
		for (fish of Islands[i].fish) {
			fishAlreadyAPlus = checkboxes[fish.id];
			if (fishAlreadyAPlus) {
				islandScore += 5;
			}
		}


		islandToRank.score = islandScore;



		islandRanks.push(islandToRank);
	}

	islandRanks.sort(scoreCompare);
	return islandRanks;
}

updateBaitDisplay = function() {
	txt = document.getElementById("baitthisrun");
	text = ""
	for (baitName of Object.keys(baitThisRun)) {
		text = text + baitName + ": " + baitThisRun[baitName] + ", ";
	}
	txt.innerText = text;
	locRanks = rankIslands();

	document.getElementById("cleanup").innerText = "Toggle Cleanup: " + (CLEANUP_WEIGHT != 0);

	table = document.getElementById("islandranks");
	table.innerHTML = "	<th></th>\
		<th>Location</th>\
			<th>Island</th>\
			<th>Excl / Non-Excl</th>\
			<th>A+ / Total</th>\
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
		</tr>";

	for (i in locRanks) {
		row = table.insertRow(-1);
		fishherecell = row.insertCell(-1)
		fishherebutton = document.createElement("button");
		fishherebutton.innerText = "Fish Here";
		fishherebutton.onclick = function(){ fishHere(this.local) }
		fishherebutton.local = locRanks[i].name;
		fishherecell.appendChild(fishherebutton);
		row.insertCell(-1).innerText = locRanks[i].name;
		row.insertCell(-1).innerText = locRanks[i].island;
		row.insertCell(-1).innerText = locRanks[i].exclusives + "/" + locRanks[i].nonExclusives;
		row.insertCell(-1).innerText = locRanks[i].aplusCount + "/" + locRanks[i].fishCount;
		for (bait of Object.keys(locRanks[i].rank)) {
			r = row.insertCell(-1)
			if (locRanks[i].rank[bait] == 2) ic = "X"
			else if (locRanks[i].rank[bait] == 1) ic = "-"
			else ic = " "
			r.innerText = ic;
			r.style.color = bait;
			r.style.backgroundColor = "#AAAAAA"
			//if (bait=="white"||bait=="yellow")
		}
	}
}

resetBait();
initButtons();