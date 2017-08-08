// No need to require exports. It's native to Nod.
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

showCard1();
// The three statements above should be moved out to a 
// another file that handles the main logic and control
// flow of your application. You want to keep these
// constructor modules as focused as possible

module.exports = BasicCard;
