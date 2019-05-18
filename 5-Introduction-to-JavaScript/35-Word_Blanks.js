/*LESSON SUMMARY: Built a sentence using the + operator and varibales. */

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "My "  + myNoun + " is " + myAdjective + " and it " + myVerb + " " + myAdverb;

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
