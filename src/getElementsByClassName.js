// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, nodeParam, nodeList) {
  var nodeList = nodeList || [];
  var nodeParam = nodeParam || document.body;
    if (nodeParam.classList.contains(className)) {
      nodeList.push(nodeParam);
    }
    for (var i = 0; i < nodeParam.children.length; i++) {
      getElementsByClassName(className, nodeParam.children[i], nodeList);
    }
  return nodeList;
};