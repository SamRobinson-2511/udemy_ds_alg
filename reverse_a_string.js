//create a function that reverses a string 


// function reverse(str){
  //check input
//   if (!str || str.length < 2 || typeof str !== 'string'){
//     return 'nope';
//   }

//   const backwards = [];
//   const totalItems = str.length -1; 
//   for(let i = totalItems; i >= 0; i--){
//     backwards.push(str[i]);
//   }
//   // console.log(backwards);
//   return backwards.join('');
// }

// reverse("why is this not working?")

//built-in methods
// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// reverse("why is this not king?")

//ES6
// const reverse = str => str.split('').reverse().join('');


//ES6 with spread operator
const reverse = str => [...str].reverse().join('');
