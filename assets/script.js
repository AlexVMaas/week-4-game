var randomNumber;
var totalScore;
var wins=0;
var losses=0;
var crystalValues=[1,2,3,4];


$(".crystals").on("click", function() {
    var index = parseInt($(this).attr("value"))
    if (totalScore < randomNumber) {
        totalScore += crystalValues[index];
        if (randomNumber === totalScore) {
            reset()
            wins++
        } else if (totalScore > randomNumber) {
            losses++
            reset ()
        }
    }   update()
})

reset();
update();

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
}




