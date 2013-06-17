var recipeBook = {
  'title': "My Recipe Book",
  'servings':  6,
  'ingredients':  ["flower", "water", "oil"]
};
console.log(recipeBook.title);
console.log("Serves: " + recipeBook.servings);
console.log('Ingrediengs:');
for (var i = 0; i <= recipeBook.ingredients.length; i++) {
  console.log(recipeBook.ingredients[i]);
}