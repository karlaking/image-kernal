
// Program that takes a nested array and returns an array of the same dimensions where each value
// is an avaerage of its north,south,east,west values, and itself. 

  // TODO make commandline utility that reads in adjacent file & 
  // Writes to a new file with size of kernal
  // Make prototype & hide private methods 
  // Configure to take kernal size and extend neighbor search
  // Write tests 
  // Refactor

const fs = require('fs');
const yargs = require('yargs');

const options = yargs.argv;
const kernalSize = options.size

var imageFile = fs.readFileSync(options.i);
var image = JSON.parse(imageFile);


var traverseArrays = function (nestedArray) {
  var kernalArrays = [];
  for (var i=0; i < nestedArray.length; i++) {
    var kernalArray = [];
    for (var j=0; j< nestedArray[i].length; j++){
      kernalArray.push(findNeighbors(i, j, nestedArray));
    }
    kernalArrays.push(kernalArray);
  }
  return kernalArrays
};



var findNeighbors = function(currentRow, currentCol, nestedArray) {
  var tempArray = [nestedArray[currentRow][currentCol]] ; 

  var neighborMap = {
    north: {
      row: currentRow -1, 
      col: currentCol
    },
    south: {
      row: currentRow +1, 
      col: currentCol
    },
    east: {
      row: currentRow, 
      col: currentCol +1
    },
    west: {
      row: currentRow, 
      col: currentCol -1 
    }
  }; 


  for (neighbor in neighborMap) {  
    var row = neighborMap[neighbor].row;
    var col = neighborMap[neighbor].col;

    if (nestedArray[row] && nestedArray[col]) {
      tempArray.push(nestedArray[row][col]);
    };

  };

  return averageValues(tempArray);
  
}; 

var averageValues = function(valueArray) {
  var valueCount = valueArray.length;
  var valueSum = 0;
  
  for (var i=0; i < valueCount; i++ ){
    valueSum += valueArray[i];  
  }; 

  return valueSum/valueCount

};

console.log(traverseArrays(image));

