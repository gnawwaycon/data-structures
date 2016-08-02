var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.arr = [];
  this.length = 0;
};


Queue.prototype.enqueue = function(str) {
  this.arr[this.length] = str;
  this.length++;
}

Queue.prototype.dequeue = function() {
  if(this.length > 0){
    var temp = this.arr.splice(0,1);
    this.length--;
    return temp[0];
  }
}

Queue.prototype.size = function () {
  return this.length;
}

var queue = new Queue();

queue.enqueue('a');

queue.enqueue('b');

queue.enqueue('c');


console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())