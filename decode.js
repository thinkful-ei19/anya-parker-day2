'use strict';

function decode(sentence) {
	let words = sentence.split(' ');
	let newWords = words.reduce(function(acc,word){
		if (word.length <= 3) {
			acc += ' ';
		}
		else {
			acc += (word[word.length-1].toUpperCase());
		}
		return acc;
	}, '');
	return newWords;
}

console.log(decode('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));