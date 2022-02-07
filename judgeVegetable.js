function judgeVegetable(vegetables, metric) {

  let newVegetables = vegetables[0];


  for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i][metric])
    if(vegetables[i][metric] > newVegetables[metric]){
      newVegetables = vegetables[i];
      
    }
    
  }
  return newVegetables.submitter
}

let vegetables = [
  {
    submitter: 'A',
    d: 20,
  },
  {
    submitter: 'B',
    d: 10,
  },
  {
    submitter: 'C',
    d: 25,
  }
]
let metric = 'd'

console.log(judgeVegetable(vegetables, metric));