

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

// class LinkedList {
//   constructor(value){
//     this.head = {
//       value: value, 
//       next: null
//     }
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value){
//     const newNode = {
//       value: value, 
//       next: null
//     }
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value){
//     const newNode = {
//       value: value, 
//       next: null
//     };
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
// }



//OOP implementation
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
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
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList(){
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value){
    // if(index === 0){
    //   this.prepend(value);
    //   return this.printList();
    // }
    if(index >= this.length){
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}






const myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.insert(2, 99));
console.log(myLinkedList.remove(4));



