////////////////////        RECIPE SEARCH       ////////////////////////////////

const searchRecipeInput = document.getElementById("searchRecipeInput");     // Get the search input element from the page
const countrySelect = document.getElementById("countrySelect");             // Get the country dropdown element from the page
const categorySelect = document.getElementById("categorySelect");           // Get the category dropdown element from the page

// RECIPE SEARCH EVENTS
searchRecipeInput.addEventListener("input", filterRecipes);      // Listen to the input field. Whenever the user types something, run filterRecipes()
countrySelect.addEventListener("change", filterRecipes);        // Listen to the country select field. Whenever the user changes the selected option, run filterRecipes()
categorySelect.addEventListener("change", filterRecipes);       // Listen to the category select field. Whenever the user changes the selected option, run filterRecipes()

// SEARCH AND FILTER RECIPES
function filterRecipes() {
    const searchRecipeValue = searchRecipeInput.value.toLowerCase();    // Get input value and convert it to lowercase for case-insensitive search
    const selectedCountry = countrySelect.value;                        // Get the selected country
    const selectedCategory = categorySelect.value;                      // Get the selected category

    let filteredRecipes = [];       // Store matching recipes

    for(let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];      // Get current recipe from the recipes array

        const matchesSearch = recipe.name.toLowerCase().includes(searchRecipeValue);                    // Check if recipe matches search text
        const matchesCountry = selectedCountry === "all" || recipe.country === selectedCountry;         // Match selected country or show all countries
        const matchesCategory = selectedCategory === "all" || recipe.category === selectedCategory;     // Match selected category or show all categories

        // Check if recipe matches all filters
        if(matchesSearch && matchesCountry && matchesCategory) {
            filteredRecipes.push(recipe);                           // Add matching recipe to filtered recipes
        }
    }
    renderRecipes(filteredRecipes);     // Show filtered recipes on the page
}

////////////////////        END OF RECIPE SEARCH       ////////////////////////////////

////////////////////        RECIPE      ////////////////////////////////

// GET RECIPES CONTAINER
const recipesContainer = document.getElementById("recipesContainer");

// RENDER RECIPES
function renderRecipes(recipesArray) {      // Render all recipes from the array into the recipes container
    recipesContainer.innerHTML = "";        // Remove all recipes before rendering new ones

    if(recipesArray.length === 0) {         // If the array is empty
        recipesContainer.innerHTML = `
            <div class="text-center py-5 empty-recipes">
                <i class="fa-solid fa-utensils fs-1 text-muted"></i>
                <h5 class="mt-3">Choose your recipes 🍽️</h5>
                <p class="text-muted">Use search or filters to explore recipes.</p>
            </div>
        `;

        return;
    }

    for (let i = 0; i < recipesArray.length; i++) {
        const recipe = recipesArray[i]; // Get current recipe from the array

        recipesContainer.innerHTML += `
            <div class="col-lg-6">
                <div class="recipe-small-card">     <!--CSS - RECIPES -->
                    <button class="small-add-btn" onclick="addItemToWeeklyPlan(${recipe.id - 1})">+</button>
                    <img src="${recipe.image}" alt="${recipe.name}">

                    <div class="p-3">
                        <h6>${recipe.name}</h6>

                        <small class="text-muted">
                            ${recipe.country} • ${recipe.category}
                        </small>
                        <br>
                        <button class="btn btn-success btn-sm mt-3" onclick="openRecipe(recipes[${recipe.id - 1}])">View Recipe</button>
                    </div>
                </div>
            </div>
        `;
    }
}
renderRecipes([]);       // Render page with no recipes selected

const recipeModalContent = document.getElementById("recipeModalContent"); // Get recipe modal content container

function getCountryFlag(country) {          // Return flag based on country
    if (country === "Serbia") return "🇷🇸";
    if (country === "Ukraine") return "🇺🇦";
    if (country === "Russia") return "🇷🇺";
    if (country === "Lebanon") return "🇱🇧";
    if (country === "India") return "🇮🇳";

    return "🌍";
}

function getCategoryIcon(category) {    // Return icon based on category

    if (category === "breakfast") return "🍳";
    if (category === "lunch") return "🍗";
    if (category === "dinner") return "🌙";

    return "🍽️";
}

function openRecipe(recipe) { // Open selected recipe in the modal

    recipeModalContent.innerHTML = `
        <div class="modal-header">
            <h4>${recipe.name}</h4>

            <button class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body">
            <img src="${recipe.image}" class="img-fluid rounded mb-4" alt="${recipe.name}">

            <p>${getCountryFlag(recipe.country)} ${recipe.country}</p>
            <p>${getCategoryIcon(recipe.category)} ${recipe.category}</p>

            <h5>Ingredients</h5>

            <ul>
                ${recipe.ingredients.map(function (item) {
                    
                return`
                        <li>
                            ${item.quantity}
                            ${item.unit}
                            ${item.name}
                        </li>
                    `;
                }).join("")}
            </ul>

            <h5>Instructions</h5>

            <ol>
                ${recipe.instructions.map(function (step) {
                return `
                        <li>${step}</li>
                    `;
                }).join("")}
            </ol>
        </div>
    `;

    const modal = new bootstrap.Modal(document.getElementById("recipeModal")); // Create Bootstrap modal instance

    modal.show(); // Display the recipe modal
}

////////////////////        END OF RECIPE      ////////////////////////////////

////////////////////        ADD RECIPE      ////////////////////////////////

// GET ADD RECIPE ELEMENTS
const newRecipeName = document.getElementById("newRecipeName"); // Get recipe name input
const newRecipeCountry = document.getElementById("newRecipeCountry"); // Get country select
const newRecipeCategory = document.getElementById("newRecipeCategory"); // Get category select
const newRecipeImage = document.getElementById("newRecipeImage"); // Get image URL input

const ingredientName = document.getElementById("ingredientName"); // Get ingredient name input
const ingredientQuantity = document.getElementById("ingredientQuantity"); // Get ingredient quantity input
const ingredientUnit = document.getElementById("ingredientUnit"); // Get ingredient unit select

const addIngredientBtn = document.getElementById("addIngredientBtn"); // Get Add Ingredient button
const ingredientsPreview = document.getElementById("ingredientsPreview"); // Get ingredients preview list

const newRecipeInstructions = document.getElementById("newRecipeInstructions"); // Get instructions textarea
const saveRecipeBtn = document.getElementById("saveRecipeBtn"); // Get Save Recipe button

let newRecipeIngredients = []; // Store ingredients before saving recipe


// ADD INGREDIENT BUTTON
addIngredientBtn.addEventListener("click", function () {

    const name = ingredientName.value.trim(); // Get ingredient name
    const quantity = Number(ingredientQuantity.value); // Get ingredient quantity as number
    const unit = ingredientUnit.value; // Get ingredient unit

    if (name === "" || quantity <= 0) {
        showModal(
            "Missing Ingredient ⚠️",
            "Please enter an ingredient name and quantity."
        );
        return;
    }

    newRecipeIngredients.push({
        name: name,
        quantity: quantity,
        unit: unit
    }); // Add ingredient to temporary array

    renderIngredientsPreview(); // Show ingredients on the page

    ingredientName.value = ""; // Clear ingredient name input
    ingredientQuantity.value = ""; // Clear quantity input
});


// RENDER INGREDIENTS PREVIEW
function renderIngredientsPreview() {

    ingredientsPreview.innerHTML = ""; // Clear preview list

    for (let i = 0; i < newRecipeIngredients.length; i++) {

        const ingredient = newRecipeIngredients[i]; // Get current ingredient

        ingredientsPreview.innerHTML += `
            <li>
                ${ingredient.quantity} ${ingredient.unit} ${ingredient.name}
            </li>
        `;
    }
}


// SAVE RECIPE BUTTON
saveRecipeBtn.addEventListener("click", function () {

    const name = newRecipeName.value.trim(); // Get recipe name
    const country = newRecipeCountry.value; // Get selected country
    const category = newRecipeCategory.value; // Get selected category
    const image = newRecipeImage.value.trim(); // Get image URL
    const instructionsText = newRecipeInstructions.value.trim(); // Get instructions text

    if (name === "" || image === "" || instructionsText === "") {
        showModal(
            "Missing Recipe Information ⚠️",
            "Please enter a recipe name, image URL, and instructions."
        );

        return;
    }

    if (newRecipeIngredients.length === 0) {
        showModal(
            "Missing Ingredients ⚠️",
            "Please add at least one ingredient."
        );
        return;
    }

    const newRecipe = {
        id: recipes.length + 1, // Create new ID based on recipes length
        name: name,
        country: country,
        category: category,
        image: image,
        ingredients: newRecipeIngredients,
        instructions: instructionsText.split("\n") // Convert each line into instruction step
    };

    recipes.push(newRecipe); // Add new recipe to recipes array



    clearAddRecipeForm(); // Clear form after saving

    showModal(
        "Recipe Added Successfully ✅",
        "Your recipe has been added successfully."
    );
});


// CLEAR FORM
function clearAddRecipeForm() {

    newRecipeName.value = "";
    newRecipeCountry.value = "Serbia";
    newRecipeCategory.value = "breakfast";
    newRecipeImage.value = "";

    ingredientName.value = "";
    ingredientQuantity.value = "";
    ingredientUnit.value = "g";

    newRecipeInstructions.value = "";

    newRecipeIngredients = [];
    ingredientsPreview.innerHTML = "";
}

////////////////////        END OF ADD RECIPE      ////////////////////////////////