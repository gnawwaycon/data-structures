// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = Node(node)
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  if(this.nodes[value] !== undefined) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // console.log(this.nodes)
  for(var item in this.nodes) {
    // console.log(item)
    var index = this.nodes[item].edges.indexOf(node);
    if(index !== -1) {
      item.edges.splice(index, 1);
    }
  }
  delete this.nodes[node]
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for(var item in this.nodes) {
    // console.log(item)
    if(item == fromNode){
      var index = this.nodes[item].edges.indexOf(toNode);
      if(index !== -1) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges.push(toNode);
  this.nodes[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index; 
  index = this.nodes[fromNode].edges.indexOf(toNode);
  this.nodes[fromNode].edges.splice(index, 1);
  
  index = this.nodes[toNode].edges.indexOf(fromNode);
  this.nodes[toNode].edges.splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var item in this.nodes) {
    cb(item)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
var Node = function(value) {
  var node = {};

  node.value = value;
  node.edges = [];

  return node;
};

var graph = new Graph();
graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
   console.log(graph.hasEdge(4, 5))
       graph.removeEdge(5, 4);

console.log(graph.hasEdge(4, 5));
