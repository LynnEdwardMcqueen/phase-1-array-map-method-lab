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


const titleCased = (tutorialTitle) => {
  const arr = tutorialTitle.split(" ");

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  // NOTE! - This code used from an example on https://flexiple.com/javascript/javascript-capitalize-first-letter/.
  //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //loop through each element of the array and capitalize the first letter.
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  //Join all the elements of the array back into a string 
  //using a blankspace as a separator 
  const titleCasedTutorialTitle = arr.join(" ");
  console.log(titleCasedTutorialTitle);
  return titleCasedTutorialTitle;
}

const titleCaseTutorials = tutorials.map(titleCased);
console.log(titleCaseTutorials)
