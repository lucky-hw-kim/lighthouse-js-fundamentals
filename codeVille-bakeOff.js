const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let foods = bakeryA.concat(bakeryB);
  let firstIn;
  let secondIn;
  let newFood = [];
  for (let i = 0; i < recipes.length; i++) {

    firstIn = recipes[i].ingredients[0];
    secondIn = recipes[i].ingredients[1];

   for (let j = 0; j < foods.length; j++) {
    if(foods[j] === firstIn){
      for (let k = 1; k < foods.length; k++) {
        if(foods[k] === secondIn){
          return recipes[i].name
        }
      }
    }
    }
  }
}








let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
      name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));