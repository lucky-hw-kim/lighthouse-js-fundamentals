const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves){
  
  let x = 0;
  let y = 0;
  let finalPosition = [];

  for (const move of moves){
    if(move === 'north'){
      y += 1;
    }else if(move === 'south'){
      y -= 1;
    }else if(move === 'east'){
      x += 1;
    }else if(move === 'west'){
      x -= 1;
    }
  }
  finalPosition.push(x);
  finalPosition.push(y);

  return finalPosition;
}

console.log(finalPosition(moves));