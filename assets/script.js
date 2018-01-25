    // On Page Load:
        // Create variables (and set them to default values):
	    	// computerRandomNumber
            var randomNumber;
			// array of crystals values
            var crystalValues=[1,2,3,4];
	        // wins = 0
            var wins=0;
	        // losses = 0
            var losses=0;
	        // userTotalScore
            var totalScore=0;

        // Call reset function
		// Call update items on the page function
    // On crystal click:
        // Figure out what crystal they clicked and store in a variable
        // Store crystal value in variable (crystalClickedValue)
        // Add crystalClickedValue to userTotalScore
        // Call update items on the page function

        $("#crystals").on("click", )
        // if they win (userTotalScore === computerRandomNumber)
            // Add 1 to wins
            // Call reset function
			// Call update items on the page function
        // if they lose (userTotalScore > computerRandomNumber)
			// Add 1 to losses
			// Call reset function
			// Call update items on the page function
    // Update items on the page (function):
        // Put wins on page
        // Put losses on page
        // Put computerRandomNumber on page
        // Put userTotalScore on page
        function update() {
            $("#wins").text(wins);
            $("#losses").text(losses);
            $("#random-number").text(randomNumber);
            $("#total-score").text(totalScore);
        }

	// Reset (function):
		// userTotalScore = 0
        // computerRandomNumber = new random number between 19 and 120
        // array of crystals values (new random numbers between 1 and 12)

        function reset() {
            totalScore = 0;
            randomNumber = (Math.floor(Math.random()*102+19));
            for (var i=0; i <crystalValues.length; i++ ) {
                crystalValues[i] = Math.ceil(Math.random()*12);
            }
            console.log(totalScore, randomNumber, crystalValues);
        }

        reset();
        update();


