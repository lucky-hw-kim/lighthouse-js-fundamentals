const camelCase = function(input) {

 let array = input.split(" ")

 
 for (let i = 1; i < array.length; i++) {
  array[i] = array[i][0].toUpperCase() + array[i].substr(1)
  
 }
 return array.join("");

};
  

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));