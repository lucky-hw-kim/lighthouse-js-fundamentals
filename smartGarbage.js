function smartGarbage (trash, bins){
  let objects = Object.keys(bins);
  objects.forEach(object => {
    if(object === trash){
      bins[object] += 1;
    }
    
  });
  
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }))

