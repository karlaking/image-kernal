

// Write a program that takes an 3x3 array and returns a 3x3 array where each value
// is an avaerage of its north,south,east,west values, and itself. 


// Pseudo code
// Define function for the convolution
  // define variable to store temp values
    // push current pixels value into the temp array 
  // write logic expressions for grabbing neighbor values and push them into temp array
  // find average of all values in temp array

// Define function that traverses the arrays, and runs the convoultoin 
  // The input will be its location like '0,0' 
  // continuing moving until you get 'undefined'


var convolution = function(currentRow, currentCol, nestedArray) {
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

  console.log(tempArray);
  
}; 


var image = [
[0,2,5],
[5,3,1],
[4,5,2]];

convolution(1,1,image);

