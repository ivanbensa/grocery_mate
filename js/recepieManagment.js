////////////////////        RECIPE SEARCH       ////////////////////////////////
// GET ELEMENTS FROM RECIPE SEARCH
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
////////////////////        ENO OF RECIPE SEARCH       ////////////////////////////////

////////////////////        RECIPE      ////////////////////////////////

// GET RECIPES CONTAINER
const recipesContainer = document.getElementById("recipesContainer");




// RENDER RECIPES

function renderRecipes(recipesArray) {

    recipesContainer.innerHTML = "";

    if (recipesArray.length === 0) {
        recipesContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="fa-solid fa-utensils fs-1 text-muted"></i>
                <h5 class="mt-3">Choose your recipes 🍽️</h5>
                <p class="text-muted">Use search or filters to explore recipes.</p>
            </div>
        `;
        return;
    }

    for (let i = 0; i < recipesArray.length; i++) {
        const recipe = recipesArray[i];
        recipesContainer.innerHTML += `

            <div class="col-lg-6">
                <div class="recipe-small-card">
                <button class="small-add-btn">+</button>
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <div class="p-3">
                        <h6>${recipe.name}</h6>

                        <small class="text-muted">${recipe.country} • ${recipe.category}</small>
                        <br>
                        <button
    class="btn btn-success btn-sm mt-3"
    onclick="openRecipe(recipes[${recipe.id - 1}])"
>

    View Recipe

</button>
                    </div>
                </div>
            </div> `;
    }
}

renderRecipes([]);

const recipeModalContent =
    document.getElementById(
        "recipeModalContent"
    );


function openRecipe(recipe) {

    recipeModalContent.innerHTML = `

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

    const modal =
        new bootstrap.Modal(
            document.getElementById(
                "recipeModal"
            )
        );

    modal.show();

}