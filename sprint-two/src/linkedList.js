var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if(list.head === null) {
      list.head = list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var temp = this.head.value;
    this.head = this.head.next;
    return temp;
  };

  list.contains = function(target) {
    var containsVal = false;
    var check = function(node) {
      if(node.value === target) {
        containsVal = true;
      } else if(node.next !== null) {
        check(node.next);
      }
    };
    check(list.head);
    return containsVal;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var linkedList = new LinkedList;
linkedList.addToTail()
/*
 * Complexity: What is the time complexity of the above functions?
 */
