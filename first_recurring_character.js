//Google Question
//Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
//It should return 2

//Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
//It should return 1

//Given an array = [2, 3, 4, 5]
//It should return undefined 


// Naive approach
// function firstRecurringCharacter(array){
//   for (let i = 0; i < array.length; i++){
//     for (let j = 1; j < array.length; j++){
//       if (array[i] === array[j]){
//         return array[i];
//       }
//     }
//   }
//   return undefined;
// };

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));

function firstRecurringCharacter2(array){
  let map = {};
  for (let i = 0; i < array.length; i++){
    if(map[array[i]] !== undefined){
      return array[i];
    } else {
      map[array[i]] = i;
    }
    console.log(map);
  } 
  
  return undefined;
}
firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]); //0(n) time, 0(n) space