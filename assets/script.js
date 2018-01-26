
            var randomNumber;
			// array of crystals values
            var crystalValues=[1,2,3,4];
	        // wins = 0
            var wins=0;
	        // losses = 0
            var losses=0;
	        // userTotalScore
            var totalScore=0;


    // On crystal click:
        // Figure out what crystal they clicked and store in a variable
        // Store crystal value in variable (crystalClickedValue)
        // Add crystalClickedValue to userTotalScore
        // Call update items on the page function

        $(".crystals").on("click", function() {
            var index = parseInt($(this).attr("value"))
            if (totalScore < randomNumber) {
                totalScore += crystalValues[index]
                update ()  
                if (randomNumber === totalScore) {
                    update()
                    reset()
                    wins++
                    alert("You won Megan!!!!")
                } else if (totalScore > randomNumber) {
                losses++
                update ()
                reset ()
                alert ("You lost Megan :( :( :( ")
                }
            }   
        })

        // if they win (userTotalScore === computerRandomNumber)
            // Add 1 to wins
            // Call reset function
			// Call update items on the page function
        // if they lose (userTotalScore > computerRandomNumber)
			// Add 1 to losses
			// Call reset function
			// Call update items on the page function

        function update() {
            $("#wins").text(wins);
            $("#losses").text(losses);
            $("#random-number").text(randomNumber);
            $("#total-score").text(totalScore);
        }

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


