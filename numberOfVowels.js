const numberOfVowels = function(data) {
 let counter = 0;
 let smallData = data.toLowerCase()
 for(let i=0; i<smallData.length; i++){
   switch (smallData[i]) {
     case 'a':
       counter += 1;
       break;
   
     case 'e':
       counter += 1;
       break;

     case 'i':
       counter += 1;
       break;

     case 'o':
       counter += 1;
       break;
     
      case 'u':
       counter += 1;
       break;
    
   }
 }return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));