$(document).ready(function(){

	var currentQuestion = 0;
	var selection;

	var answers = ["California", "Wyoming", "South Dakota", "New York", "North Carolina"];
	var parkTitle = ["Giant Sequoia National Park", "Yellowstone National Park", "Badlands National Park", "Battle of Saratoga National Historic Park", "Cape Hatteras National Seashore"];
	var facts = [
		"This landscape testifies to nature's size, beauty, and diversity - huge mountains, rugged foothills, deep canyons, vast caverns, and the world's largest trees.This park lies side-by-side with Kings Canyon National Park  in the southern Sierra Nevada, east of the San Joaquin Valley. Visitor activities vary by season and elevation (1,370 to 14,494 feet).",
		"It's a wonderland. Old Faithful and the majority of the world's geysers are preserved here. They are the main reason the park was established in 1872 as America's first national park—an idea that spread worldwide. A mountain wildland, home to grizzly bears, wolves, and herds of bison and elk, the park is the core of one of the last, nearly intact, natural ecosystems in the Earth’s temperate zone.",
		"The rugged beauty of this park draws visitors from around the world. These striking geologic deposits contain one of the world’s richest fossil beds. Ancient mammals such as the rhino, horse, and saber-toothed cat once roamed here. The park’s 244,000 acres protect an expanse of mixed-grass prairie where bison, bighorn sheep, prairie dogs, and black-footed ferrets live today.",
		"Here in the autumn of 1777, American forces met, defeated and forced a major British army to surrender.  This crucial American victory in the battle at this park renewed patriots’ hopes for independence, secured essential foreign recognition and support, and forever changed the face of the world.",
		"The sound of ocean waves, the starry night sky, or the calm of the salt marshes, you can experience it all. Shaped by the forces of water, wind, and storms these islands are ever changing. The plants, wildlife, and people who live here adapt continually. Whether you are walking on the beach, kayaking on the sound, or climbing the Cape Hatteras Lighthouse there is something for everyone to explore!"
		];

	var newQuestion = function() {
		$(".parkName").html('<p>'+parkTitle[currentQuestion]+'</p>');
		$(".fact").html('<p>'+facts[currentQuestion]+'</p>');
		$("#answerContainer").hide();
		$("#image1").hide();
		$("#image2").hide();
		$("#image3").hide();
		$("#image4").hide();
		$("#image5").hide();
		$("#correct").hide();
		$("#incorrect").hide();
		if (currentQuestion < 5) {
			$("#questionContainer").show();
		}
		else {
			var newGame = confirm("Game Over!! Want to Try Again?");
            if (newGame) {
              	$("#startContainer").show();
              	$("#image5").hide();
              	$("#correct").hide();
				$("#incorrect").hide();
				$(".answerContainer").hide();
              	currentQuestion = 0;
              	$("#scoreTrack").html('<table class="track"><tr><td colspan="2">ScoreCard</td></tr></table>')
            }
            else {
            	$("#titleText").html('Thanks for Playing!');
			}
		}
	};

	$("#gameStart").click(function() {
		$("#startContainer").hide();
		newQuestion();
	});

	$("#questionContainer").on("click", "#submit", function() {
		selection = $(".choices").val();
		console.log(answers[currentQuestion]);
		console.log(selection);
		showAnswer();
		
		if (selection == answers[currentQuestion]) {
			$("#correct").show();
			result = "Correct";
		}
		else {
			$("#incorrect").show();
			result = "Incorrect";
		}
		$(".track").append('<tr><td>'+answers[currentQuestion]+'</td><td>'+result+'</td></tr)');
		currentQuestion++;
	});

	$("#answerContainer").on("click", "#next", function() {
		newQuestion();
	});

	var showAnswer = function() {
		$("#questionContainer").hide();
		$("#answerContainer").show();
		if(currentQuestion === 0) {
			$("#image1").show();
		}
		if(currentQuestion == 1) {
			$("#image2").show();
		}
		if(currentQuestion == 2) {
			$("#image3").show();
		}
		if(currentQuestion == 3) {
			$("#image4").show();
		}
		if(currentQuestion == 4) {
			$("#image5").show();
		}
	};

});