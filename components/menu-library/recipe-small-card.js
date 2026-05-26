class RecipeSmallCard extends HTMLElement {
  connectedCallback() {
    const recipesService = new RecipesService();
    const recipeId = this.getAttribute("recipe-id");
    const recipe = recipesService.getRecipeById(recipeId);

    if (!recipe) {
      return;
    }
    const name = recipe.name;
    const imgUrl = recipe.imageUrl;
    const modalId = `rsc-modal-${recipeId}`;

    this.innerHTML = `
      <style>
        .recipe-small-card{
            position: relative;
            border: 1px solid #e5e5e5;
            border-radius: 14px;
            overflow: hidden;
            background-color: white;
        }
        .recipe-small-card img{
            width: 100%;
            height: 110px;
            object-fit: cover;
        }
        .recipe-small-card h6{
            padding: 12px;
            margin: 0;
        }
        .recipe-small-card button{
          position: absolute;
          right: 10px;
          top: 10px;
          border: none;
          background-color: var(--bs-body-bg);
          color: var(--bs-success);
          border: 1px solid var(--bs-success);
          width: 26px;
          height: 26px;
          border-radius: 50%;
        }
      </style>
      <div class="recipe-small-card">
          <img src="${imgUrl}" alt="recipe-image">
          <button data-bs-toggle="modal" data-bs-target="#${modalId}">+</button>
          <div class="recipe-small-card-body">
            <h6>${name}</h6>
          </div> 
      </div>
      <div class="modal fade" id="${modalId}" tabindex="-1"     aria-labelledby="${modalId}" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="${modalId}">${name}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
             <div class="card">
              <img src="${imgUrl}" alt="recipe-image">
             </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success">Add</button>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}
customElements.define("recipe-small-card", RecipeSmallCard);
