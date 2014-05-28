$(document).ready(function(){

	var questionAnswer;
	var selection;
	var result;

	$("#gameStart").click(function() {
		$("#USA").hide();
		$("#californiaQuestion").show();
	});

	$(".button").click(function() {
		questionAnswer = $(".state").text();
		console.log(questionAnswer);
		selection = $(".answers").val();
		console.log(selection);
		$(".quiz").hide().next().show();
		if (selection == questionAnswer) {
			$("#correct").show();
			result = "Correct";
		}
		else {
			$("#incorrect").show();
			result = "Incorrect";
		};
		$("#scoreTrack").show();
		$("#scoreTrack").append('<tr><td>'+questionAnswer+'</td><td>'+result+'</td></tr)');
	});

	$(".next").click(function () {
		$(".pictures").hide().next().show();
		$("#correct").hide();
		$("#incorrect").hide();
		$("#scoreTrack").hide();
	});
});