var compChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
var winsCount = 0;
var lossesCount = 0;
var pinkcrystalChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var redcrystalChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var bluecrystalChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var yellowcrystalChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var userTotalS = 0;


function shuffleCrystalValues(){
	pinkcrystalChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	redcrystalChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	bluecrystalChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	yellowcrystalChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
}


function gameStart(){
	if(userTotalS === compChoice){
		winsCount++;
		$('#win-counter').text(winsCount);
		$('#win-or-lose').text('You won!');
		compChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-num').text(compChoice);
		userTotalS = 0;
		$('#score-counter').text(userTotalS);
		shuffleCrystalValues();
    } 
    
    else if(userTotalS > compChoice){
		lossesCount++;
		$('#loss-counter').html(lossesCount);
		$('#win-or-lose').text('You lost!');
		compChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-num').text(compChoice);
		userTotalS = 0;
		$('#score-counter').text(userTotalS);
		shuffleCrystalValues();
	}

}


$('#random-num').text(compChoice);

$('#pinkcrystal').on('click', function(){
	userTotalS += pinkcrystalChoice;
	$('#score-counter').text(userTotalS);
	gameStart();
});


$('#redcrystal').on('click', function(){
	userTotalS += redcrystalChoice;
	$('#score-counter').text(userTotalS);
	gameStart();
});


$('#bluecrystal').on('click', function(){
	userTotalS += bluecrystalChoice;
	$('#score-counter').text(userTotalS);
	gameStart();
});


$('#yellowcrystal').on('click', function(){
	userTotalS += yellowcrystalChoice;
	$('#score-counter').text(userTotalS);
	gameStart();
});