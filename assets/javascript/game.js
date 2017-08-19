// Four crystals displayed at bottom of page

// RULES
// ============================================================
// 1. Player is shown a random number at start in #startScore
// 2. Click on crystal, random amount added to total score in #totalScore
// 3. Player loses if score goes above random number
// 4. Player wins if their score matches random number
// 5. Each time game restarts, crystals have new value and random score resets
// ============================================================

// PARAMETERS
// ============================================================
// 1. Each crystal's value is hidden to player until clicked
// 2. Score counter & user score must reset to 0 at the start of each game
// ============================================================

$(document).ready(function() {
// GLOBAL VARIABLES
// ============================================================
var startScore = Math.floor(Math.random() * 40) + 1;
var totalScore = 0;
var wins = 0;
var losses = 0;
$('#startScore').html(startScore);
// ============================================================

// FUNCTIONS
// ============================================================

// Audio
var audio = new Audio('assets/audio/pokemon-theme.mp3');
audio.play();

// Gem click functions
$('#boulder').on("click", function(){
	for (var i = 0; i < 5; i++) {
		var random = Math.floor(Math.random() * 2) +1;
	    totalScore = totalScore + random;
	    $('#totalScore').html(totalScore);
	}
	winLose();
});
$('#mine').on("click", function(){
	for (var i = 0; i < 5; i++) {
		var random = Math.floor(Math.random() * 2) +1;
	    totalScore = totalScore + random;
	    $('#totalScore').html(totalScore);
	}
	winLose();
});
$('#rainbow').on("click", function(){
	for (var i = 0; i < 5; i++) {
		var random = Math.floor(Math.random() * 2) +1;
	    totalScore = totalScore + random;
	    $('#totalScore').html(totalScore);
	}
	winLose();
});
$('#relic').on("click", function(){
	for (var i = 0; i < 5; i++) {
		var random = Math.floor(Math.random() * 2) +1;
	    totalScore = totalScore + random;
	    $('#totalScore').html(totalScore);
	}
	winLose();
});

// Win / Loss functions
// User wins
function winLose() {
	if (totalScore === startScore) {
		wins++;
		$('#wins').html(wins);
		$("#resultText").html("YOU WIN. Play again?");
		$('#playAgain').show();

// User loses
	} else if (totalScore > startScore) {
		losses++;
		$('#losses').html(losses);
		$("#resultText").html("LOSER! Play again?");
		$('#playAgain').show();
	}
}

// Play again button
$('#playAgain').on("click", function(){ 
	totalScore = 0;
	$('#totalScore').html("");
	startScore = Math.floor(Math.random() * 40) + 1;
	$('#startScore').html(startScore);
	$('#resultText').html(" ");
	$('#playAgain').hide();

});
});
// ============================================================