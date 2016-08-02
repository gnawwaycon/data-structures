var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var contains = false;
  var checkChildren = function(node) {
    if(node.value === target) {
      contains = true;
    } else {
      node.children.forEach((child) => checkChildren(child))
    }
  };
  checkChildren(this);
  return contains;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
