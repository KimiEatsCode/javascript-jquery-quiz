

var Questions= [
	// store answer with questions for easier retrieval
	{  question : 'I like to get cashback', pref: 'cash', cashPerson: true},
	{  question: 'I like to get rewards', pref: 'reward' , cashPerson: false},
	{  question: 'I like cash', pref: 'cash', cashPerson:true }

];


var numberQuestions = 0;
var question;
var count = 0;
var cash = 0;
var reward = 0;
//show answer buttons only after clicking start button


document.getElementById('answerT').style.display="";
document.getElementById('answerF').style.display="";

function catAndQuest1(val) {
question = Questions[0]


}

function catAndQuest(val) {

	// document.getElementById('count').innerHTML= 'Question ' +  Questions.length;

		// question = Questions[count];

		question = Questions[Math.floor(Math.random() * Questions.length)];

		if(question.cashPerson === val) {
			console.log(Questions[count].pref);

	    }

	document.getElementById('quest').innerHTML= question.question;

	count++
}


//user answered question
function answer(val){

	var cash = 0;
	var reward = 0;

if(Questions[count] != undefined < Questions.length) {
	if(Questions[count].cashPerson === val) {
		console.log(Questions[count].pref)

} else {
	return;
}
}

// catAndQuest();

}


//restart the game
function restart(){
	alert ('thanks')
	// document.location.href="";
}


