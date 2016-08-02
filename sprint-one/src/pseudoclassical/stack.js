var Stack = function() {
  this.arr = [];
  this.length = 0;
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
};
//
//
Stack.prototype.push = function(str){
  this.arr[this.length] = str;
  this.length++;
}
//
Stack.prototype.pop = function() {
  if(this.length > 0) {
    var temp = this.arr[this.length-1];
    delete this.arr[--this.length];
    return temp;
  }
}
//
Stack.prototype.size = function () {
  return this.length;
};
//
var stack = new Stack();

stack.push('a');

console.log(stack.pop());

stack.push('b');
stack.push('c');


console.log(stack.pop());