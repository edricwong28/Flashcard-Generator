var exports = require('exports');
var inquirer = require("inquirer");

function BasicCard(front, back){
	this.front = front;
	this.back = back;
};


var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

var showCard1 = function(){
	console.log(firstPresident.front)
	inquirer.prompt([
      {
        name: "confirm",
        type: "confirm",
        message: "Would you like to see the answer?"
      }
    ])
    .then(function(answers){
    	console.log(firstPresident.back); 
    }); 
}



module.exports = BasicCard;
showCard1();
