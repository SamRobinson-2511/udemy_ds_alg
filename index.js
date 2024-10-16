// const nemo = ["nemo"];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// const large = new Array(100).fill('nemo');

// function findNemo(array){
//   let t0  = performance.now();
//   for(let i = 0; i < array.length; i++){
//     if (array[i] === 'nemo'){
//       console.log('found NEMO');
//     }
//   }
//   let t1 = performance.now();
//   console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds')
// }

// findNemo(nemo);

//calculate how many operations are needed
// const nemo = ["nemo"];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// const large = new Array(100).fill('nemo');

// function findNemo(array){
//   for(let i = 0; i < array.length; i++){
//     if (array[i] === 'nemo'){
//       console.log('found NEMO');
//     }
//   }
// }

// findNemo(large);

// const boxes = [0, 1, 2, 3, 4, 5];
// function logFirstTwoBoxes(boxes){
//   console.log(boxes[0]);
//   console.log(boxes[1]);
// }
// logFirstTwoBoxes(boxes); //O(2): constant time 

// function funChallenge(input){
//   let a = 10; //0(1)
//   a = 50 + 3; //O(1)

//   for (let i = 0; i < input.length; i++){ //O(n)
//     anotherFunction(); //O(n)
//     let stranger = true; //O(n)
//     a++; //O(n)
//   }
//   return a; //O(1)
// }

// //Big O: O(3 + 4n)
// funChallenge();

// function anotherFunChallenge(input){
//   let a = 5; // O(1)
//   let b = 10; // O(1)
//   let c = 50; // O(1)
//   for (let i = 0; i < input; i++){
//     let x = i + 1; // O(n)
//     let y = i + 2; // O(n)
//     let z = i + 3; // O(n)
//   }
//   for (let j = 0; j < input; j++){
//     let p = j * 2; // O(n)
//     let q = j * 2; // O(n)
//   }
//   let whoAmI = "I don't know"; // O(1)
// }

//Big O = O(4 + 5n)


//Rule 1: Worst Case
// const nemo = ["nemo"];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// const large = new Array(100).fill('nemo');

// function findNemo(array){
//   let t0  = performance.now();
//   for(let i = 0; i < array.length; i++){
//     console.log('running');
//     if (array[i] === 'nemo'){
//       console.log('found NEMO');
//       break;
//     }
//   }
//   let t1 = performance.now();
//   console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds')
// }
// findNemo(everyone);


//Rule 2: Remove Constants
// function printFirstItemThenFirstHalfThenSayHi100Times(items){
//   console.log(items);

//   const middleIndex = Math.floor(items.length / 2);
//   const index = 0;

//   while (index < middleIndex) {
//     console.log(items[index]);
//     index++;
//   }

//   for (const i = 0; i < 100; i++) {
//     console.log('hi');
//   }
// }


//Rule 3: Different Terms for Inputs
//Trickiest parts of interview
// O(m + n)

// function compressBoxesTwice(boxes, boxes2){
//   boxes.forEach(function(boxes){
//     console.log(boxes);
//   })

//   boxes2.forEach(function(boxes){
//     console.log(boxes);
//   })
// }