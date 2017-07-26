var exports = require('exports');
var inquirer = require("inquirer");

function ClozeCard(fullText, cloze){
	this.fullText = fullText;
	this.cloze = cloze;
	this.partial = this.fullText.replace(this.cloze, "...");
};

var showCard1 = function(){
	console.log(firstPresidentCloze.partial)
	inquirer.prompt([
      {
        name: "confirm",
        type: "confirm",
        message: "Would you like to see the answer?"
      }
    ])
    .then(function(answers){
    	console.log(firstPresidentCloze.cloze); 
    }); 
}

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");


// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

module.exports = ClozeCard;
showCard1();