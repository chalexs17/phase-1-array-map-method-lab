const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((string) => {
		//iterates through all strings
    const wordArray = string.split(" ");
		//For each string, splits string into array of words 
		//=> ["what", "does", "the", "this", "keyword", "mean?"]
    const newWords = wordArray.map((word) => {
		//iterates through each word in the above array
        return word.charAt(0).toUpperCase() + word.slice(1);
				//For each word, returns first letter capitalized + remainder of word 
				//=> "W" + "hat"
    });
    return newWords.join(" ");
		//Joins all returned words back into one string
  });
	//Pushes modified strings to new array
};

const newTutorials = titleCased(tutorials);