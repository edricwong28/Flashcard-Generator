function ClozeCard(text, cloze){
	this.fullText = fullText;
	this.cloze = cloze;
	this.partial = function(){
		//remove the cloze,replace with "...", then print the new strong
	};
};

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); ""

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText); ""

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");