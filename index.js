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

const titleCaseModifier = (tutorialTitle) => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  // NOTE! - This code used from an example on https://flexiple.com/javascript/javascript-capitalize-first-letter/.
  //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  let tutorialWordArray = [];
  let tutorialTitleSandbox = tutorialTitle.slice();
  let index = tutorialTitleSandbox.indexOf(" ");

  while (index != -1) {
    index = tutorialTitleSandbox.indexOf(" ");
    if (index != -1) {
      tutorialWordArray.push(tutorialTitleSandbox.slice(0, index));
      tutorialTitleSandbox = tutorialTitleSandbox.slice(index + 1);
    }
  }
  tutorialWordArray.push(tutorialTitleSandbox)
  
  //loop through each element of the array and capitalize the first letter.
  for (var i = 0; i < tutorialWordArray.length; i++) {
    tutorialWordArray[i] = tutorialWordArray[i].charAt(0).toUpperCase() + tutorialWordArray[i].slice(1);
  }

  //Join all the elements of the array back into a string   
  //using a blankspace as a separator 
  const titleCasedTutorialTitle = tutorialWordArray.join(" ");
  return titleCasedTutorialTitle;
}

/* 
let newTitle = titleCaseModifier('what does the this keyword mean?');
// const titleCaseTutorials = tutorials.map(titleCased);
console.log(newTitle);
*/

const titleCased = () => {
  return (tutorials.map(titleCaseModifier));
}

console.log(titleCased());

