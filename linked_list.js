

//pointers
// const obj1 = {a: true};
// const obj2 = obj1;
// obj1.a = 'booya';
// console.log('1', obj2);
// console.log('2', obj2);


//garbage collection 
// let obj1 = {a: true};
// let obj2 = obj1;
// obj1.a = 'booya';
// delete obj1;
// // console.log('1', obj1);
// console.log('2', obj2);

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

class LinkedList {
  constructor(value){
    this.head = {
      value: value, 
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value){
    const newNode = {
      value: value, 
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value){
    const newNode = {
      value: value, 
      next: null
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(1));


