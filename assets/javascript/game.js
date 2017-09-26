$(document).ready(function() {

	var lettersGuessed = [];
	var tries = 15;
	var winCount = 0;
	var words = ['CINDERELLA','ALICE','BAMBI','PINOCCHIO','FANTASIA','MICKEY','DONALD','GOOFY'];
	var activeWord;


	function chooseWord() {
		$("#solve").text("");
		activeWord = words[Math.floor(Math.random() * words.length)];
		return activeWord;
	};

	function newWord() {
		for (var i = 0; i < activeWord.length; i++) {
			$("#solve").append("_ ");
			// $("#solve").append("<p id='blankSpace'"+i+" > _</p> "); //maybe make id="blankSpace-1" for each space and replace with letter if matches
			// console.log(activeWord);
		};
	};

	chooseWord();
	console.log(activeWord);
	newWord();

	// checking every letter in console log
	// for (var i=0; i < activeWord.length;i++) {
	// 	console.log(activeWord.charAt(i));
	// }

	document.onkeyup = function(event) {
		var userGuess = event.key;
		userGuess = userGuess.toUpperCase();
   	    tries--;
   	    lettersGuessed.push(userGuess);
   	    // console.log(lettersGuessed);
		$("#guesses").text(tries);
		$("#guessed").append(userGuess + " ");

		// for (var i=0; i < activeWord.length;i++) {
			// if (userGuess = activeWord.charAt(i)) {
				// $("#blankSpace-"+i).text(userGuess);
			// };
		// };

		if (tries < 1) {
			tries = 15;
			$("#guesses").text(tries);			
			$("#guessed").text("");	
			lettersGuessed = [];
			chooseWord();	
			newWord();
			console.log(activeWord);
		}

		// if (tries > 0 && word is completed) {
		// 	winCount++;
		// 	$("#wins").text(winCount);
		// };

	};



});