const whereCanIPark = function (spots, vehicle) {
  let arr = [];
  if(vehicle === "regular"){
    for (let rows = 0; rows < spots.length; rows++) {
      for (let columns = 0; columns < spots[rows].length; columns++) {
        if (spots[rows][columns] === 'R') {
          arr.push(columns)
          arr.push(rows)
          
          return arr
    
          }
        }
        
      }
      
    }
   
  else if (vehicle === 'small') {
    for (let rows = 0; rows < spots.length; rows++) {
      for (let columns = 0; columns < spots[rows].length; columns++) {
        if (spots[rows][columns] === 'S') {
          arr.push(columns)
          arr.push(rows)
          return arr

        }
        
      }
      
    }
    
  }

  else if (vehicle === 'motorcycle') {
    for (let rows = 0; rows < spots.length; rows++) {
      for (let columns = 0; columns < spots[rows].length; columns++) {
        if (spots[rows][columns] === 'M') {
          arr.push(columns)
          arr.push(rows)
          return arr
        } 
        } 
      
      }
      
    }

    return false
    
  }


console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))