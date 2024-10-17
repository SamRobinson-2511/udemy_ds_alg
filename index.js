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


//Rule 3: Different Terms for Inputs
//Log all pairs of an array (O(n^2))
//Quadratic time: O(n^2)
// const boxes = [1, 2, 3, 4, 5];

// function logAllPairsOfArray(array){
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j]);
//     }
//   }
// }

// logAllPairsOfArray(boxes);


//Rule 4: Drop all non - dominants 
// function printAllNumbersThenAllPairSums(numbers){

//   console.log('these are the numbers: ');
//   numbers.forEach(function(number){
//     console.log(number);
//   });

//   console.log('and each of these are their sums: ');
//   numbers.forEach(function(firstNumber){
//     numbers.forEach(function(secondNumber){
//       console.log(firstNumber + secondNumber);
//     });
//   });
// }

// printAllNumbersThenAllPairSums([1,2,3,4,5]);

// O(n^2)

//Given two arrays, create a function that lets a user know
//true/false
// whether these two arrays contain any common items
//EX. 
//const array1 = ['a', 'b', 'c', 'x']
//const array2 = ['z', 'y', 'x']
//should return true

// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'x']

// function sameBruteForce(arr1, arr2){
//   for(let i = 0; i < arr1.length; i++){
//     for(let j = 0; j < arr2.length; j++){
//       if (arr1[i] === arr2[j]){
//         return true;
//       }
//     }
//   }
//   return false;
// }


// sameBruteForce(array1, array2)


//use hash table 

// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'x']

//array1 ==> object {
//a: true
//b: true
//c: true
//x: true
//}
//array2[index] === object.properties

// function sameHash(arr1, arr2){
//   //loop through first array and create object with properties = array items
//   let map = {};
//   for(let i = 0; i < arr1.length; i++){
//     if(!map[arr1[i]]){
//       const item = arr1[i];
//       map[item] = true;
//     }
//   }
//   //loop through second array and check if item exists in object
//   for (let j = 0; j < arr2.length; j++){
//     if(map[arr2[j]]){
//       return true
//     }
//   }
//   return false;
// }
// //0(a+b)
// sameHash(array1, array2);


//cleaner language with methods
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'x']

// function cleanHash(arr1, arr2){
//   return arr1.some(item => arr2.includes(item));
// }

// cleanHash(array1, array2);

//Two Sum
// function hasPairWithSums(arr, sum){
//   const len = arr.length;
//   for(let i =0; i < len; i++){
//     for(let j = 0; j < len; j++){
//       if (arr[i] + arr[j] === sum){
//         return true;
//       }
//     }
//   }
//   return false;
// }




//Better
// function hasPairWithSums2(arr, sum){
//   const mySet = new Set();
//   const len = arr.length;
//   for (let i = 0; i < len; i++){
//     if (mySet.has(arr[i])){
//       return true;
//     }
//     mySet.add(sum - arr[i]);
//   }
//   return false;
// }

// hasPairWithSums2([6, 4, 3, 2, 1, 7], 9)

const strings = ['a', 'b', 'c', 'd']
//4*4 = 16 bytes of storage

//access
strings[2]


//push
strings.push('e'); //O(1)

//pop
strings.pop(); //O(1)


//unshift
strings.unshift('x'); //O()


//splice
strings.splice(2, 0, 'alien'); //O(n)
// console.log(strings);