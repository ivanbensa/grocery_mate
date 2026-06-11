////////////////////        RECIPE SEARCH       ////////////////////////////////
// GET ELEMENTS FROM RECIPE SEARCH
/*
const searchRecipeInput = document.getElementById("searchRecipeInput");
const countrySelect = document.getElementById("countrySelect");
const categorySelect = document.getElementById("categorySelect");

// RECIPE SEARCH EVENTS
searchRecipeInput.addEventListener("input", filterRecipes); // Listen to the input field. Whenever the user types something, run filterRecipes()
countrySelect.addEventListener("change", filterRecipes);    // Listen to the country select field. Whenever the user changes the selected option, run filterRecipes()
categorySelect.addEventListener("change", filterRecipes);

// SEARCH AND FILTER RECIPES
function filterRecipes() {
    const searchRecipeValue = searchRecipeInput.value.toLowerCase();    // Get input value and convert it to lowercase for case-insensitive search
    const selectedCountry = countrySelect.value;                        // Get the selected country
    const selectedCategory = categorySelect.value;                      // Get the selected category

    let filteredRecipes = [];   // Store matching recipes

    for (let i = 0; i < recipes.length; i++) {

        const recipe = recipes[i];  // Get current recipe

        const matchesSearch = recipe.name.toLowerCase().includes(searchRecipeValue);                    // Check if recipe matches search text
        const matchesCountry = selectedCountry === "all" || recipe.country === selectedCountry;         // Match selected country or show all countries
        const matchesCategory = selectedCategory === "all" || recipe.category === selectedCategory;     // Match selected category or show all categories

        if (matchesSearch && matchesCountry && matchesCategory) {
            filteredRecipes.push(recipe);   // Add recipe to filtered recipes
        }
    }

    renderRecipes(filteredRecipes);     // Show filtered recipes on the page
}
*/

////////////////////        RECIPE SEARCH       ////////////////////////////////

// GET ELEMENTS FROM RECIPE SEARCH
const searchRecipeInput = document.getElementById("searchRecipeInput"); // Search input field
const countrySelect = document.getElementById("countrySelect");         // Country dropdown
const categorySelect = document.getElementById("categorySelect");       // Category dropdown

// RECIPE SEARCH EVENTS

searchRecipeInput.addEventListener("input", filterRecipes);
// Listen to the input field.
// Whenever the user types something, run filterRecipes()

countrySelect.addEventListener("change", filterRecipes);
// Listen to the country select field.
// Whenever the user changes the selected option, run filterRecipes()

categorySelect.addEventListener("change", filterRecipes);
// Listen to the category select field.
// Whenever the user changes the selected option, run filterRecipes()


// SEARCH AND FILTER RECIPES

function filterRecipes() {

    const searchRecipeValue = searchRecipeInput.value.toLowerCase();
    // Get input value and convert it to lowercase
    // for case-insensitive search

    const selectedCountry = countrySelect.value;
    // Get the selected country

    const selectedCategory = categorySelect.value;
    // Get the selected category


    let filteredRecipes = [];
    // Store matching recipes


    // NEW:
    // We now loop through allRecipes instead of recipes
    // because allRecipes contains:
    // recipes.js recipes + MockAPI recipes

    for (let i = 0; i < allRecipes.length; i++) {

        const recipe = allRecipes[i];
        // Get current recipe from all recipes


        const matchesSearch =
            recipe.name.toLowerCase().includes(searchRecipeValue);
        // Check if recipe matches search text


        const matchesCountry =
            selectedCountry === "all" ||
            recipe.country === selectedCountry;
        // Match selected country
        // or show all countries


        const matchesCategory =
            selectedCategory === "all" ||
            recipe.category === selectedCategory;
        // Match selected category
        // or show all categories


        if (
            matchesSearch &&
            matchesCountry &&
            matchesCategory
        ) {

            filteredRecipes.push(recipe);
            // Add recipe to filtered recipes

        }
    }

    renderRecipes(filteredRecipes);
    // Show filtered recipes on the page
}

////////////////////        END OF RECIPE SEARCH       ////////////////////////////////
////////////////////        ENO OF RECIPE SEARCH       ////////////////////////////////

////////////////////        RECIPE      ////////////////////////////////
////////////////////        RECIPE      ////////////////////////////////

// MOCKAPI URL
const API_URL = "https://6a27e9044e1e783349a49b60.mockapi.io/api/v1/recipes"; // MockAPI endpoint for saved recipes

// GET RECIPES CONTAINER
const recipesContainer = document.getElementById("recipesContainer"); // Get recipes container

// GET MODAL CONTENT
const recipeModalContent = document.getElementById("recipeModalContent"); // Get recipe modal content container

// GLOBAL RECIPE ARRAYS
let apiRecipes = []; // Store recipes loaded from MockAPI
let allRecipes = []; // Store recipes from recipes.js + MockAPI together


// LOAD RECIPES FROM MOCKAPI

async function loadApiRecipes() { // Load saved recipes from MockAPI

    try {

        const response = await fetch(API_URL); // Get recipes from MockAPI

        if (!response.ok) { // Check if API request failed
            throw new Error("Could not load API recipes");
        }

        apiRecipes = await response.json(); // Convert API response to JavaScript array

        allRecipes = [...recipes, ...apiRecipes]; // Combine local recipes.js recipes and API recipes

        renderRecipes(allRecipes); // Show all recipes on the page

    } catch (error) {

        console.log(error); // Show error in console

        allRecipes = [...recipes]; // If API fails, use only local recipes.js recipes

        renderRecipes(allRecipes); // Show only local recipes

    }
}


// RENDER RECIPES

function renderRecipes(recipesArray) { // Render all recipes from the array into the recipes container

    recipesContainer.innerHTML = ""; // Remove all recipes before rendering new ones

    if (recipesArray.length === 0) { // If the array is empty

        recipesContainer.innerHTML = ` <!-- Display message when no recipes are found -->
            <div class="text-center py-5 empty-recipes">
                <i class="fa-solid fa-utensils fs-1 text-muted"></i>
                <h5 class="mt-3">Choose your recipes 🍽️</h5>
                <p class="text-muted">Use search or filters to explore recipes.</p>
            </div>
        `;

        return; // Stop the function
    }

    for (let i = 0; i < recipesArray.length; i++) { // Go through each recipe

        const recipe = recipesArray[i]; // Get current recipe from the array

        recipesContainer.innerHTML += ` <!-- Append recipe card to the page -->

            <div class="col-lg-6">
                <div class="recipe-small-card">

                    <button
                        class="small-add-btn"
                        onclick="addItemToWeeklyPlan(${i})"
                    >
                        +
                    </button> <!-- Add recipe to Weekly Plan -->

                    <img src="${recipe.image}" alt="${recipe.name}">

                    <div class="p-3">
                        <h6>${recipe.name}</h6>

                        <small class="text-muted">
                            ${recipe.country} • ${recipe.category}
                        </small>

                        <br>

                        <button
                            class="btn btn-success btn-sm mt-3"
                            onclick="openRecipe(allRecipes[${i}])"
                        >
                            View Recipe
                        </button> <!-- Open selected recipe -->
                    </div>

                </div>
            </div>
        `;
    }
}


// OPEN RECIPE MODAL

function openRecipe(recipe) { // Open selected recipe in the modal

    if (typeof recipe.ingredients === "string") {
        // MockAPI returns ingredients as a string, so convert it back to an array
        recipe.ingredients = JSON.parse(recipe.ingredients);
    }

    if (typeof recipe.instructions === "string") {
        // MockAPI returns instructions as a string, so convert it back to an array
        recipe.instructions = JSON.parse(recipe.instructions);
    }

    recipeModalContent.innerHTML = ` <!-- Display selected recipe in the modal -->

        <div class="modal-header">
            <h4>${recipe.name}</h4>
            <button class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body">

            <img
                src="${recipe.image}"
                class="img-fluid rounded mb-4"
                alt="${recipe.name}"
            >

            <p>🌍 ${recipe.country}</p>
            <p>🍽️ ${recipe.category}</p>

            <h5>Ingredients</h5>

            <ul>
                ${recipe.ingredients.map(function (item) {
        return `
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


// INITIAL RENDER

renderRecipes([]); // Show empty recipes state before API/local recipes are loaded

loadApiRecipes(); // Load API recipes and then show all recipes

/*
// GET RECIPES CONTAINER
const recipesContainer = document.getElementById("recipesContainer");

// RENDER RECIPES

function renderRecipes(recipesArray) {  // Render all recipes from the array into the recipes container

    recipesContainer.innerHTML = "";    // Remove all recipes before rendering new ones

    if (recipesArray.length === 0) {    // If the array is empty
        recipesContainer.innerHTML = `    <!-- Display message when no recipes are found -->
            <div class="text-center py-5 empty-recipes">
                <i class="fa-solid fa-utensils fs-1 text-muted"></i>
                <h5 class="mt-3">Choose your recipes 🍽️</h5>
                <p class="text-muted">Use search or filters to explore recipes.</p>
            </div>
        `;
        return;
    }

    for (let i = 0; i < recipesArray.length; i++) {
        const recipe = recipesArray[i];     // Get current recipe from the array
        recipesContainer.innerHTML += `    <!-- Append recipe card to the page     -->

            <div class="col-lg-6">
                <div class="recipe-small-card">
                <button class="small-add-btn" onclick=addItemToWeeklyPlan(${recipe.id - 1})>+</button>     <!-- Add recipe to Weekly Plan -->
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <div class="p-3">
                        <h6>${recipe.name}</h6>

                        <small class="text-muted">${recipe.country} • ${recipe.category}</small>
                        <br>
                        <button class="btn btn-success btn-sm mt-3" onclick="openRecipe(recipes[${recipe.id - 1}])">View Recipe</button>   <!-- Open selected recipe   -->
                    </div>
                </div>
            </div> `;
    }
}

renderRecipes([]);  // Render page with no recipes selected

const recipeModalContent = document.getElementById("recipeModalContent");   // Get recipe modal content container


function openRecipe(recipe) {   // Open selected recipe in the modal

    if (typeof recipe.ingredients === "string") {
        // MockAPI returns ingredients as a string, so convert it back to an array
        recipe.ingredients = JSON.parse(recipe.ingredients);
    }

    if (typeof recipe.instructions === "string") {
        // MockAPI returns instructions as a string, so convert it back to an array
        recipe.instructions = JSON.parse(recipe.instructions);
    }

    recipeModalContent.innerHTML = `    <!-- Display selected recipe in the modal  -->

        <div class="modal-header">
            <h4>${recipe.name}</h4>
            <button class="btn-close"data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body">
            <img src="${recipe.image}"class="img-fluid rounded mb-4">
            <p>🌍 ${recipe.country}</p>
            <p>🍽️ ${recipe.category}</p>
            <h5>Ingredients</h5>
            <ul>
                ${recipe.ingredients.map(function (item) {
        return `
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

    const modal = new bootstrap.Modal(document.getElementById("recipeModal"));  // Create Bootstrap modal instance

    modal.show();   // Display the recipe modal
}
*/

//////////  ADD RECIPES    /////////////////

// ADD RECIPE WITH MOCKAPI

const API_URL = "https://6a27e9044e1e783349a49b60.mockapi.io/api/v1/recipes";

let apiRecipes = [];
let newRecipeIngredients = [];

const newRecipeName = document.getElementById("newRecipeName");
const newRecipeCountry = document.getElementById("newRecipeCountry");
const newRecipeCategory = document.getElementById("newRecipeCategory");
const newRecipeImage = document.getElementById("newRecipeImage");

const ingredientName = document.getElementById("ingredientName");
const ingredientQuantity = document.getElementById("ingredientQuantity");
const ingredientUnit = document.getElementById("ingredientUnit");

const addIngredientBtn = document.getElementById("addIngredientBtn");
const ingredientsPreview = document.getElementById("ingredientsPreview");

const newRecipeInstructions = document.getElementById("newRecipeInstructions");
const saveRecipeBtn = document.getElementById("saveRecipeBtn");

async function loadApiRecipes() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Could not load recipes from API");
        }

        apiRecipes = await response.json();

        renderRecipes([...recipes, ...apiRecipes]);
    } catch (error) {
        console.log(error);
        renderRecipes(recipes);
    }
}

addIngredientBtn.addEventListener("click", function () {
    const name = ingredientName.value.trim();
    const quantity = Number(ingredientQuantity.value);
    const unit = ingredientUnit.value;

    if (name === "" || quantity <= 0) {
        alert("Please enter ingredient name and quantity.");
        return;
    }

    newRecipeIngredients.push({
        name: name,
        quantity: quantity,
        unit: unit
    });

    renderIngredientsPreview();

    ingredientName.value = "";
    ingredientQuantity.value = "";
    ingredientUnit.value = "g";
});

function renderIngredientsPreview() {
    ingredientsPreview.innerHTML = "";

    for (let i = 0; i < newRecipeIngredients.length; i++) {
        const ingredient = newRecipeIngredients[i];

        ingredientsPreview.innerHTML += `
            <li>
                ${ingredient.quantity} ${ingredient.unit} ${ingredient.name}
            </li>
        `;
    }
}

saveRecipeBtn.addEventListener("click", async function () {
    const name = newRecipeName.value.trim();
    const country = newRecipeCountry.value;
    const category = newRecipeCategory.value;
    const file = newRecipeImage.files[0];
    const image = await uploadImageToCloudinary(file);
    const instructionsText = newRecipeInstructions.value.trim();

    if (name === "" || instructionsText === "") {
        alert("Please fill recipe name and instructions.");
        return;
    }

    if (image === "") {
        alert("Please choose an image.");
        return;
    }

    if (newRecipeIngredients.length === 0) {
        alert("Please add at least one ingredient.");
        return;
    }

    const newRecipe = {
        name: name,
        country: country,
        category: category,
        image: image,
        ingredients: JSON.stringify(newRecipeIngredients),
        instructions: JSON.stringify(instructionsText.split("\n"))
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRecipe)
        });

        if (!response.ok) {
            alert("Recipe was not saved. The image may be too large.");
            return;
        }

        const savedRecipe = await response.json();

        apiRecipes.push(savedRecipe);

        clearAddRecipeForm();

        renderRecipes([...recipes, ...apiRecipes]);

        alert("Recipe saved to API!");
    } catch (error) {
        console.log(error);
        alert("Something went wrong while saving the recipe.");
    }
});

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

async function uploadImageToCloudinary(file) {

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "grocerymate_upload");

    const response = await fetch(
        "https://api.cloudinary.com/v1_1/dsgxbcrxh/image/upload",
        {
            method: "POST",
            body: formData
        }
    );

    const data = await response.json();

    return data.secure_url;
}

loadApiRecipes();