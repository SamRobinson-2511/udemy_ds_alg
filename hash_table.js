// let user = {
//   age: 54, 
//   name: 'Kylie', 
//   magic: true, 
//   scream: function () {
//     console.log('Ahhhhhh');
//   }
// }

// console.log(user.magic);


// const a = new Map(); // can save any data type as a key, maintains insertion order
// const b = new Sets(); //stores keys, no values


class HashTable{
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key){
    let hash = 0; 
    for (let i = 0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i)*i) %
      this.data.length;
      // console.log(hash);
    }
    return hash;
  }

  set(key, value){
    let address = this._hash(key);
    if(!this.data[address]){
      this.data[address] = [];
      // console.log(this.data);
    } 
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key){
    let address = this._hash(key);
    const currentBucket = this.data[address];
    // console.log(currentBucket);
    if (currentBucket){
      for(let i = 0; i < currentBucket.lenght; i++){
        if(currentBucket[i][0] === key){
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys(){
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++){
      if(this.data[i]){
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('apples', 54); //bucket
myHashTable.set('grapes', 10000); 
myHashTable.set('oranges', 20); 
myHashTable.get('apples');
console.log(myHashTable.keys());






