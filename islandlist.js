/**
 *Possibly the most important function in this file.
 * ^ for some reason the built in ai autocorrect suggested
 * this line but honestly this is kind of true. Well, it is
 * hard to say what the most important part of something is.
 * Like saying "what is the most important part of the watch?"
 * which the answer to that is all of it. Not one part of the
 * watch can run without the other. The hands to tell the time,
 * the spring or battery to keep it going, the gears to get
 * the time ratio correct, if it has it the crystal for getting
 * the frequency of the clock.
 *
 * wait where was I? oh yeah possibly load a JSON of all the
 * data rather than running this each time (keep it to help
 * regen though.)
 */

genFish = function(name, bk, wt, br, pr, pk, lb, bl, gr, lg, yl, or, rd, mystery) {
	fish = {
		name: name,
		mysterySpecies: (mystery == "x"),
		bait: {
			red: (rd == "x"),
			orange: (or == "x"),
			yellow: (yl == "x"),
			lightgreen: (lg == "x"),
			green: (gr == "x"),
			blue: (bl == "x"),
			lightblue: (lb == "x"),
			pink: (pk == "x"),
			purple: (pr == "x"),
			brown: (br == "x"),
			white: (wt == "x"),
			black: (bk == "x"),
		}
	}
	return fish;
}

Islands = [{name:"Beginner's Bay",island: "Prelude Island",fish:[
genFish("Sardine","","x","","","x","x","","","x","","x","x",""),
genFish("Black Rockfish","x","","","","","x","x","x","","","x","",""),
genFish("Largescale Blackfish","","","","","x","x","x","","x","","x","",""),
genFish("Japanese Sea Bass","","","","x","","","","x","x","","","x",""),
genFish("Black Sea Bream","x","x","x","","x","x","","","","x","","","")]},
{name:"Sylvana River",island: "Prelude Island",fish:[
genFish("Dace","","","","","x","x","","","","","x","x",""),
genFish("Pale Chub","","","x","","","","x","","","","","x",""),
genFish("Dark Chub","","","","x","","x","x","x","","","","",""),
genFish("Rainbow Trout","","x","","","","","x","x","","x","","","")]},
{name:"Cypress Lake",island: "Prelude Island",fish:[
genFish("Bluegill","x","","","","x","x","x","","","","","",""),
genFish("Crucian Carp","","","","","","x","x","","","","x","x",""),
genFish("Crayfish","","x","","","","x","","","x","x","","x",""),
genFish("Smallmouth Bass","x","","","x","","","x","","x","","","","")]},
{name:"Prelude Deep-Sea Cruise",island: "Prelude Island",fish:[
genFish("Japanese Whiting","","","x","","","x","","","","","","x",""),
genFish("Pacific Saury","","x","","","","x","x","","x","","","",""),
genFish("Chicken Grunt","","","","","","","","x","x","","","x",""),
genFish("Skipjack Tuna","","","","","","x","x","","x","","","",""),
genFish("Red Sea Bream","","","","","","","x","","","x","","",""),
genFish("Leedsichthys","x","","","x","","","","x","","","","x","")]},
{name:"Ariana Beach",island: "Giovanna Island",fish:[
genFish("Blue Bat Star","","","","","","","x","","","","","x",""),
genFish("Filefish","x","","x","x","x","","","x","","x","","",""),
genFish("Barracuda","x","","","","","x","x","","","","x","",""),
genFish("Righteye Flounder","x","","","x","x","","x","","","","","","")]},
{name:"Fernhollow Pond",island: "Giovanna Island",fish:[
genFish("Tadpole","","","","","","","x","","","","","x",""),
genFish("Spined Loach","","","","x","","","","","","","x","x",""),
genFish("Dark Sleeper","","","","","","","x","","","","x","x",""),
genFish("Carp","","","","x","","","","x","","x","","x","")]},
{name:"Coleville Pier",island: "Giovanna Island",fish:[
genFish("Mackerel","","x","","","","","x","","","","","x",""),
genFish("Pacific Herring","x","","","x","","","x","","","","x","",""),
genFish("Japanese Horse Mackerel","","x","x","","","x","","x","","","x","x",""),
genFish("Largehead Hairtail","","","","","x","x","x","","","","","",""),
genFish("Japanese Spanish Mackerel","","","","x","x","","","x","x","","x","","")]},
{name:"Shangri Lake",island: "Giovanna Island",fish:[
genFish("Crucian Carp","","","","","","x","x","","","","x","x",""),
genFish("Bluegill","x","","","","x","x","x","","","","","",""),
genFish("Chinese Softshell Turtle","x","","","x","","","","","","x","x","",""),
genFish("Catfish","x","","x","","","","","","","x","","x","")]},
{name:"Emberwood River",island: "Giovanna Island",fish:[
genFish("Pale Chub","","","x","","","","x","","","","","x",""),
genFish("Dark Chub","","","","x","","x","x","x","","","","",""),
genFish("Iwana Trout","","x","","","","","","","","x","","x",""),
genFish("Rainbow Trout","","x","","","","","x","x","","x","","",""),
genFish("Rhizodus","","","x","","","x","","","x","x","","","")]},
{name:"Clifton Cove",island: "Memento Island",fish:[
genFish("Forktongue Goby","x","","","","x","","","","x","","","x",""),
genFish("Lionfish","","","","x","x","","x","","x","","","",""),
genFish("Filefish","x","","x","x","x","","","x","","x","","",""),
genFish("Blue tang","","x","","","","","x","","","x","","",""),
genFish("Moray Eel","x","","","","x","","","","x","","x","","")]},
{name:"Mossmeadow Pond",island: "Memento Island",fish:[
genFish("Spined Loach","","","","x","","","","","","","x","x",""),
genFish("Crucian Carp","","","","","","x","x","","","","x","x",""),
genFish("American Bullfrog","x","","x","","","","","","","","","x",""),
genFish("Smallmouth Bass","x","","","x","","","x","","x","","","",""),
genFish("Largemouth Bass","","x","","","","","x","","","x","","x","")]},
{name:"Rainhaven Pond",island: "Memento Island",fish:[
genFish("Dace","","","","","x","x","","","","","x","x",""),
genFish("Iwana Trout","","x","","","","","","","","x","","x",""),
genFish("Sweetfish","","x","","","","x","x","","","","","",""),
genFish("Chum Salmon","","x","","","x","","","","x","","x","","")]},
{name:"Matsunoa Pier",island: "Memento Island",fish:[
genFish("Pacific Herring","x","","","x","","","x","","","","x","",""),
genFish("Japanese Horse Mackerel","","x","x","","","x","","x","","","x","x",""),
genFish("Black Rabbitfish","","","x","x","","","","","","","","x",""),
genFish("Okhotsk Atka Mackerel","","x","","","","x","x","","","","","",""),
genFish("Tiger Blowfish","x","x","x","","","","","","","","","","")]},
{name:"Memento Deep-Sea Cruise",island: "Memento Island",fish:[
genFish("Pacific Saury","","x","","","","x","x","","x","","","",""),
genFish("Spear Squid","","x","","x","","","","","x","","","x",""),
genFish("Red King Crab","","","","x","","x","","","","","x","",""),
genFish("Alaska Pollack","","","x","x","","","","","","","","x",""),
genFish("Yellowtail","","","x","","","x","x","","","","","",""),
genFish("Dunkleosteus","","x","","x","","","x","","","","","","")]},
{name:"Sanzaneeta Reef",island: "Mermaid Island",fish:[
genFish("Filefish","x","","x","x","x","","","x","","x","","",""),
genFish("Pennant Coralfish","x","x","x","","","","x","x","","","","",""),
genFish("Convict Tang","x","x","","","","","x","","","x","","",""),
genFish("Black Sea Bream","x","x","x","","x","x","","","","x","","",""),
genFish("Barred Knifejaw","x","","x","x","","","","x","","x","","","")]},
{name:"Steelsbay Rock",island: "Mermaid Island",fish:[
genFish("Black Rabbitfish","","","x","x","","","","","","","","x",""),
genFish("Barracuda","x","","","","","x","x","","","","x","",""),
genFish("Boxfish","","x","","","","","x","x","","x","","",""),
genFish("Okhotsk Atka Mackerel","","x","","","","x","x","","","","","",""),
genFish("Flathead Mullet","","","","","","","","x","","x","","x","")]},
{name:"Parker Lake",island: "Mermaid Island",fish:[
genFish("American Bullfrog","x","","x","","","","","","","","","x",""),
genFish("Dark Sleeper","","","","","","","x","","","","x","x",""),
genFish("Yellow Perch","x","","","","","","","","","x","","x",""),
genFish("Northern Pike","","","","","","x","","x","","","x","","")]},
{name:"Marshview Pond",island: "Mermaid Island",fish:[
genFish("Tadpole","","","","","","","x","","","","","x",""),
genFish("Spined Loach","","","","x","","","","","","","x","x",""),
genFish("Chinese Softshell Turtle","x","","","x","","","","","","x","x","",""),
genFish("Snakehead","","x","","x","","x","","","x","","","",""),
genFish("Golden Bass","","","x","","x","x","","","","","","x","x")]},
{name:"Maple River",island: "Mermaid Island",fish:[
genFish("Iwana Trout","","x","","","","","","","","x","","x",""),
genFish("Sweetfish","","x","","","","x","x","","","","","",""),
genFish("Cherry Salmon","","x","","","","","x","x","x","","","",""),
genFish("Rainbow Trout","","x","","","","","x","x","","x","","",""),
genFish("Iridescent Shark","","","x","","","","x","","","","x","","")]},
{name:"Highland Lake",island: "Mermaid Island",fish:[
genFish("Crucian Carp","","","","","","x","x","","","","x","x",""),
genFish("Bluegill","x","","","","x","x","x","","","","","",""),
genFish("Yellow Perch","x","","","","","","","","","x","","x",""),
genFish("Snakehead","","x","","x","","x","","","x","","","",""),
genFish("Northern Pike","","","","","","x","","x","","","x","",""),
genFish("Nessie","","","","","","","","x","","","x","x","")]},
{name:"Dayton Point",island: "Atlantis Island",fish:[
genFish("Mackerel","","x","","","","","x","","","","","x",""),
genFish("Boxfish","","x","","","","","x","x","","x","","",""),
genFish("Porcupinefish","","","","x","","","","x","x","x","","",""),
genFish("Common Octopus","","x","x","","x","","","","","x","x","",""),
genFish("Flounder","","x","","x","","","","","","x","x","","")]},
{name:"Beauford Pond",island: "Atlantis Island",fish:[
genFish("Tadpole","","","","","","","x","","","","","x",""),
genFish("American Bullfrog","x","","x","","","","","","","","","x",""),
genFish("Crayfish","","x","","","","x","","","x","x","","x",""),
genFish("Smallmouth Bass","x","","","x","","","x","","x","","","",""),
genFish("Eel","","","","x","","","x","x","","","","","")]},
{name:"Kohu Lake",island: "Atlantis Island",fish:[
genFish("Crucian Carp","","","","","","x","x","","","","x","x",""),
genFish("Dark Sleeper","","","","","","","x","","","","x","x",""),
genFish("Chinese Softshell Turtle","x","","","x","","","","","","x","x","",""),
genFish("Koi","","","","","x","","","","x","","","",""),
genFish("Golden Koi","","","x","","x","","x","","x","","","","x")]},
{name:"Mistfall River",island: "Atlantis Island",fish:[
genFish("Iwana Trout","","x","","","","","","","","x","","x",""),
genFish("Sweetfish","","x","","","","x","x","","","","","",""),
genFish("Cherry Salmon","","x","","","","","x","x","x","","","",""),
genFish("Rainbow Trout","","x","","","","","x","x","","x","","",""),
genFish("King Salmon","","","x","","x","x","","","","","","","")]},
{name:"Graydale Lake",island: "Atlantis Island",fish:[
genFish("Crucian Carp","","","","","","x","x","","","","x","x",""),
genFish("Bluegill","x","","","","x","x","x","","","","","",""),
genFish("Yellow Perch","x","","","","","","","","","x","","x",""),
genFish("Smallmouth Bass","x","","","x","","","x","","x","","","",""),
genFish("Lake Trout","x","","","","x","","","","x","","x","","")]},
{name:"Kastamoor Pond",island: "Atlantis Island",fish:[
genFish("Tadpole","","","","","","","x","","","","","x",""),
genFish("Spined Loach","","","","x","","","","","","","x","x",""),
genFish("Crayfish","","x","","","","x","","","x","x","","x",""),
genFish("Saddled Bichir","x","","x","","","","","","x","","x","",""),
genFish("Wels Catfish","x","","","","x","","","","","","x","","")]},
{name:"Atlantis Deep-Sea Cruise",island: "Atlantis Island",fish:[
genFish("Pacific Saury","","x","","","","x","x","","x","","","",""),
genFish("Spear Squid","","x","","x","","","","","x","","","x",""),
genFish("Snow Crab","","","x","","x","x","","","","","x","",""),
genFish("Pacific Cod","","x","","x","x","","","","","x","","",""),
genFish("Kronosaurus","","","","","","x","","x","","","","",""),
genFish("Giant Squid","x","","","","","","","","","","x","x","x")]},
{name:"Seraphia Pier",island: "Poseidon Island",fish:[
genFish("Largescale Blackfish","","","","","x","x","x","","x","","x","",""),
genFish("Black Rabbitfish","","","x","x","","","","","","","","x",""),
genFish("Porcupinefish","","","","x","","","","x","x","x","","",""),
genFish("Largehead Hairtail","","","","","x","x","x","","","","","",""),
genFish("Japanese Bullhead Shark","","x","","x","","","","x","x","x","","",""),
genFish("North Pacific Giant Octopus","","","x","","","","x","","","","","","")]},
{name:"Clearwater Lake",island: "Poseidon Island",fish:[
genFish("Crucian Carp","","","","","","x","x","","","","x","x",""),
genFish("Bluegill","x","","","","x","x","x","","","","","",""),
genFish("Stickleback","","","x","","","","","x","","x","","",""),
genFish("Smallmouth Bass","x","","","x","","","x","","x","","","",""),
genFish("Alligator Snapping Turtle","","","","x","","","","x","","x","","","")]},
{name:"Eureka Lake",island: "Poseidon Island",fish:[
genFish("Pale Chub","","","x","","","","x","","","","","x",""),
genFish("Dark Chub","","","","x","","x","x","x","","","","",""),
genFish("Cherry Salmon","","x","","","","","x","x","x","","","",""),
genFish("Rainbow Trout","","x","","","","","x","x","","x","","",""),
genFish("Taimen","","","","","x","","","","x","","x","","")]},
{name:"Aruna Rock",island: "Poseidon Island",fish:[
genFish("Convict Tang","x","x","","","","","x","","","x","","",""),
genFish("Pennant Coralfish","x","x","x","","","","x","x","","","","",""),
genFish("Indo-Pacific Sergeant","x","x","","","","x","","","x","","x","",""),
genFish("Garfish","","","","","","","","","","","","x",""),
genFish("Longtooth Grouper","","","","","x","x","","x","","x","","",""),
genFish("Tarpon","x","","x","","x","","","","","","","","")]},
{name:"Poseidon Deep-Sea Cruise",island: "Poseidon Island",fish:[
genFish("Chicken Grunt","","","","","","","","x","x","","","x",""),
genFish("Red Gurnard","","","","","x","","","","","","","x",""),
genFish("Japanese Spider Crab","","","","","","x","","","","","x","",""),
genFish("Mahimahi","x","","","","x","","","x","","x","","",""),
genFish("Pacific Bluefin Tuna","x","","x","","","","","","x","","x","",""),
genFish("Golden Tuna","","x","","x","","","x","","x","","","","x")]},
{name:"Wyverdun Lake",island: "Poseidon Island",fish:[
genFish("Bluegill","x","","","","x","x","x","","","","","",""),
genFish("Chinese Softshell Turtle","x","","","x","","","","","","x","x","",""),
genFish("Clown Loach","x","","","","x","","","","x","","x","",""),
genFish("Eel","","","","x","","","x","x","","","","",""),
genFish("Lake Trout","x","","","","x","","","","x","","x","",""),
genFish("Dragon","","","","x","","","","","x","x","","","")]},
{name:"Yunali Reef",island: "Oceanora Island",fish:[
genFish("Butterfly Fish","","","","","x","","","","","x","x","x",""),
genFish("Clownfish","","x","","","","","","x","x","","x","",""),
genFish("Little Dragonfish","","","","x","","","","x","x","x","","",""),
genFish("Japanese Bullhead Shark","","x","","x","","","","x","x","x","","",""),
genFish("Scalloped Hammerhead","","","","x","","","","","x","","","x","")]},
{name:"Foxmere Lake",island: "Oceanora Island",fish:[
genFish("Dark Sleeper","","","","","","","x","","","","x","x",""),
genFish("Crayfish","","x","","","","x","","","x","x","","x",""),
genFish("Yellow Perch","x","","","","","","","","","x","","x",""),
genFish("Smallmouth Bass","x","","","x","","","x","","x","","","",""),
genFish("Alligator Gar","x","","","","","x","","x","","","","","")]},
{name:"Bridgecliff Beach",island: "Oceanora Island",fish:[
genFish("Porcupinefish","","","","x","","","","x","x","x","","",""),
genFish("Spiny Lobster","x","","","","","","","x","x","","","",""),
genFish("Sea Horse","","","x","","","","","x","","x","","",""),
genFish("Garfish","","","","","","","","","","","","x",""),
genFish("Humphead Wrasse","","","x","","","","","x","x","","","",""),
genFish("Cheep Cheep","","x","","","","","x","","","x","x","","x")]},
{name:"Oceanora Deep-Sea Cruise 1",island: "Oceanora Island",fish:[
genFish("Japanese Whiting","","","x","","","x","","","","","","x",""),
genFish("Spear Squid","","x","","x","","","","","x","","","x",""),
genFish("Amberjack","x","","","x","","","","","","","x","",""),
genFish("Splendid Alfonsino","","","","","x","","","","","x","x","",""),
genFish("Coelacanth","","","","","x","","","","x","","","",""),
genFish("Golden Bream","","","x","","","x","x","","","","","x","x")]},
{name:"Arcana Beach",island: "Oceanora Island",fish:[
genFish("Forktongue Goby","x","","","","x","","","","x","","","x",""),
genFish("Orange-Striped Emperor","x","","","x","","","x","","","","","",""),
genFish("Pinecone Fish","","","x","x","","","","x","","x","","",""),
genFish("Horseshoe Crab","","x","","","","","","x","","","","",""),
genFish("Great White Shark","x","x","","x","","","","x","","","","",""),
genFish("Golden Shark","","x","","","","x","","","","x","x","","x")]},
{name:"Hazeldown River",island: "Oceanora Island",fish:[
genFish("Dace","","","","","x","x","","","","","x","x",""),
genFish("Pale Chub","","","x","","","","x","","","","","x",""),
genFish("Dark Chub","","","","x","","x","x","x","","","","",""),
genFish("Stringfish","","","x","","x","","","","","","","",""),
genFish("Golden Rainbow Trout","x","","","x","","x","","","","","x","","x")]},
{name:"Oceanora Deep-Sea Cruise 2",island: "Oceanora Island",fish:[
genFish("Pacific Saury","","x","","","","x","x","","x","","","",""),
genFish("Red King Crab","","","","x","","x","","","","","x","",""),
genFish("Snow Crab","","","x","","x","x","","","","","x","",""),
genFish("Frilled Shark","","x","x","","","","","","","","","",""),
genFish("Football Fish","","","x","","","x","","","","","","",""),
genFish("Leviathan","x","x","","","","x","x","","","","","","")]},
{name:"Mythroll Deep-Sea Cruise 1",island: "Mythroll Island",fish:[
genFish("Flapjack Octopus","","x","","x","","","","","","x","","",""),
genFish("Giant Isopod","","","x","","","","","","","","x","",""),
genFish("Flying Fish","x","x","","x","","x","","","","","","",""),
genFish("Sawshark","","","","","x","x","","","","","","",""),
genFish("Swordfish","","x","","","","","","","x","x","","",""),
genFish("Golden Swordfish","","","","x","","","","x","","","","x","x")]},
{name:"Cutty's Cave",island: "Mythroll Island",fish:[
genFish("Spiny Lobster","x","","","","","","","x","x","","","",""),
genFish("Longnose Hawkfish","","x","","","x","","x","","","","","",""),
genFish("Koran Angelfish","","","","","x","","x","","x","x","","",""),
genFish("Garfish","","","","","","","","","","","","x",""),
genFish("Tawny Nurse Shark","","","","","","","","x","","","x","",""),
genFish("Blooper","x","","x","x","","","","","","","","x","x")]},
{name:"Bangaban River",island: "Mythroll Island",fish:[
genFish("Piranha","x","","x","x","","","","","","","","x",""),
genFish("Siamese Fighting Fish","","","","","","x","","","","","","x",""),
genFish("Dwarf Gourami","","","","","x","","","","","","","x",""),
genFish("Northern Barramundi","","","x","","x","","","","","","","x",""),
genFish("Arowana","","","","","","x","","","","x","x","","")]},
{name:"Abunda Jungle",island: "Mythroll Island",fish:[
genFish("Piranha","x","","x","x","","","","","","","","x",""),
genFish("Dwarf Gourami","","","","","x","","","","","","","x",""),
genFish("Angelfish","","","","","","x","x","","","","","",""),
genFish("Dorado","","","x","","x","","","x","","x","x","",""),
genFish("Gigantic Carp","x","","","","","","","","x","","","","")]},
{name:"Mythroll Deep-Sea Cruise 2",island: "Mythroll Island",fish:[
genFish("Japanese Whiting","","","x","","","x","","","","","","x",""),
genFish("Flying Fish","x","x","","x","","x","","","","","","",""),
genFish("Mediterranean Dealfish","","x","x","","","","","","","","","",""),
genFish("Whale Shark","","","x","x","","","","","x","","","",""),
genFish("Kraken","","","","","x","","","","x","x","","",""),
genFish("Oarfish","","x","","","","","x","x","","","","","x")]},
{name:"Mysteria Deep-Sea Cruise",island: "Mysteria Island",fish:[
genFish("Red Gurnard","","","","","x","","","","","","","x",""),
genFish("Viperfish","","","x","","","","","x","","x","","",""),
genFish("Pelican Eel","x","","","","","","x","","","","","",""),
genFish("Sunfish","x","","","x","","","","x","","","","",""),
genFish("Manta Ray","","","","","x","","","x","","","","x",""),
genFish("Spotted Eagle Ray","","x","","","x","","x","","","","","","")]},
{name:"Sellbrook River",island: "Mysteria Island",fish:[
genFish("Iwana Trout","","x","","","","","","","","x","","x",""),
genFish("Sweetfish","","x","","","","x","x","","","","","",""),
genFish("Cherry Salmon","","x","","","","","x","x","x","","","",""),
genFish("Rainbow Trout","","x","","","","","x","x","","x","","",""),
genFish("Sturgeon","x","","","","x","","","x","","","","",""),
genFish("Golden Salmon","","x","","","x","","","","x","","x","","x")]},
{name:"Mahtori Jungle",island: "Mysteria Island",fish:[
genFish("Piranha","x","","x","x","","","","","","","","x",""),
genFish("Siamese Fighting Fish","","","","","","x","","","","","","x",""),
genFish("Ocellate River Stingray","x","","","x","","","","","","","","",""),
genFish("Nile Perch","","x","","x","x","","","","","","x","",""),
genFish("Giant Freshwater Stingray","","x","","","","","","","x","","","","")]},
{name:"Sulani River",island: "Mysteria Island",fish:[
genFish("Dwarf Gourami","","","","","x","","","","","","","x",""),
genFish("Elephantnose Fish","x","","","","","x","","","","","x","",""),
genFish("Angelfish","","","","","","x","x","","","","","",""),
genFish("Electric Eel","","","x","","","x","","","","","","",""),
genFish("Arapaima","","","x","","","","","","x","x","","","")]},
{name:"Enigma Cave",island: "Mysteria Island",fish:[
genFish("Stickleback","","","x","","","","","x","","x","","",""),
genFish("Giant Pikehead","","","","","","","x","x","x","x","","",""),
genFish("Alligator Snapping Turtle","","","","x","","","","x","","x","","",""),
genFish("Saddled Bichir","x","","x","","","","","","x","","x","",""),
genFish("African Lungfish","","","x","","","x","","","","","","",""),
genFish("UFO","","","x","","","x","","x","","","","","")]}];

for (i in Islands) {
	for (j in Islands[i].fish) {
		ff = Islands[i].fish[j];
		ff.id = species[ff.name];
	}
}