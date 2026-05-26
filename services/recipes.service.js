class RecipesService {
  #recipes = [
    {
      id: "1",
      name: "Lemon Garlic Chicken with Black Pepper",
      imageUrl: "images/chicken.jpg",
    },
    {
      id: "2",
      name: "Veggie Stir Fry",
      imageUrl: "images/salad.jpg",
    },
  ];

  getRecipeById(id) {
    return this.#recipes.find((e) => e.id === id);
  }
}
