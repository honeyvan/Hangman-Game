$(document).ready(function() {

	var lettersGuessed = [];
	var tries = 15;
	var winCount = 0;
	var words = ['CINDERELLA','ALICE','BAMBI','PINOCCHIO','FANTASIA','MICKEY','DONALD','GOOFY','HERCULES','POCAHONTAS','NEVERLAND'];
	var activeWord;
	var activeClone;
	var userGuessWord;


	function chooseWord() {
		$("#solve").text("");
		activeWord = words[Math.floor(Math.random() * words.length)];
		return activeWord;
	};

	function newWord() {
		for (var i = 0; i < activeWord.length; i++) {
			$("#solve").append('<h6 class="letters" id="letter'+ i +'">_ ');
		};
		lettersGuessed = [];
		tries = 15;
		$("#guesses").text(tries);
		$("#guessed").text("");	
		activeClone   = activeWord;
    	userGuessWord = Array(activeClone.length+1).join("_");
	};

	function isLetter(str) {
		return str>64 && str <91;
	}

	//should i move these functions to the bottom?
	chooseWord();
	console.log(activeWord);
	newWord();

	document.onkeyup = function(event) {
		var keyCode = event.keyCode;
		if(isLetter(keyCode)) {
			var userGuess = event.key;
			userGuess = userGuess.toUpperCase();

		   	if (lettersGuessed.indexOf(userGuess) == -1) {   //disable repeats 
		   	    tries--;
		   	    lettersGuessed.push(userGuess);
				$("#guesses").text(tries);
				$("#guessed").append(userGuess + " ");

				var location = activeClone.indexOf(userGuess);

				while(location > -1) {
					$('#letter'+location).text(userGuess);
					activeClone = activeClone.replace(userGuess, "_");
					location = activeClone.indexOf(userGuess);
				}

				if (tries >= 0 && activeClone === userGuessWord) {
					$("#pic").attr("src","assets/images/" + activeWord + ".gif");
					winCount++;
					$("#wins").text(winCount);
					chooseWord();
					newWord();
				}

				if (tries < 0) {			
					chooseWord();	
					newWord();
					$("#pic").attr("src","assets/images/loser.gif");
				}
			} // repeat check
		} // if isLetter
	}; // onkeyup

}); // document ready