const urlEncode = function(text) {
  let charArr = []
  let result;
  let newText = text.trim() 
  for (let i = 0; i < newText.length; i++) {
    charArr.push(newText[i])
    if (charArr[i]===' ') {
      charArr.splice(i,1,'%20')
    }
    result = charArr.join("");
  }
return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));