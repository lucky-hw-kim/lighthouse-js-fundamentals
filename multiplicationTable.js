
const multiplicationTable = function(maxValue) {
  // Your code here
  let numRows = '';

for (let columns = 1; columns <= maxValue; columns++) {

    numRows += '\n'

  for (let rows = 1; rows <= maxValue; rows++) {

      if(columns > 1){
      numRows += ' ' + rows * columns
      }
      else{
        numRows += ' ' + rows 
      }
      
    }
}

  return numRows
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));