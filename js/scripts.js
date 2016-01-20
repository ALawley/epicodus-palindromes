var palindromeCheck = function(userInput) {
  var wordArray = [];
  var reverseArray = [];
  var reverseText = "";
  for (var index = 1; index <= userInput.length; index +=1) {
    wordArray.push(userInput.slice((index - 1), index));
  };
  for (var rindex = 1; rindex <= userInput.length; rindex +=1) {
    reverseArray.push(wordArray.pop());
  };
  reverseArray.forEach(function(character) {
    reverseText += character
  });
  if (reverseText === userInput) {
    return true;
  } else {
  return false;
  };
};
