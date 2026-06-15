/** Date variables */
const today = new Date();
let selectedDay = today;
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/** Weekly plan logical variables */
const weeklyPlan = new Map();

/** This is to populate weekly plan on first page open so it's not empty */
function setRandomDailyPlan() {
  function randomOf(arr) {
    return arr[Math.round(Math.random() * (arr.length - 1))];
  }

  weeklyPlan.set(today.getTime(), {
    breakfast: randomOf(
      recipes.filter((recipe) => recipe.category === "breakfast"),
    ),
    lunch: randomOf(recipes.filter((recipe) => recipe.category === "lunch")),
    dinner: randomOf(recipes.filter((recipe) => recipe.category === "dinner")),
  });
}

function toNextDay() {
  selectedDay.setDate(selectedDay.getDate() + 1);
  renderSelectedDayPlan();
}

function toPrevDay() {
  selectedDay.setDate(selectedDay.getDate() - 1);
  renderSelectedDayPlan();
}

function removeItemFromSelectedDay(category) {
  let selectedDayRecipes = weeklyPlan.get(selectedDay.getTime());
  if (!selectedDayRecipes) {
    return;
  }
  delete selectedDayRecipes[category];
  renderSelectedDayPlan();
}

function addItemToWeeklyPlan(itemIndex) {
  const item = recipes[itemIndex];

  function notifyAlertItemAdded(date, replace = false) {
    const message = `${item.name} was added to ${date.toLocaleDateString()} - ${daysOfWeek[date.getDay()]}`;
    
    // IVAN START
    showModal(
        "Recipe Added ✅",
        message
    );
    // IVAN END
  }

  const enumerator = weeklyPlan.keys();
  let current = enumerator.next();
  let previous = new Date().getTime();
  while (!current.done) {
    const slot = weeklyPlan.get(current.value);
    if (slot[item.category]) {
      previous = current.value;
      current = enumerator.next();
      continue;
    } else {
      slot[item.category] = item;
      notifyAlertItemAdded(new Date(current.value));
      renderSelectedDayPlan();
      return;
    }
  }
  // Slot not found so make one
  const newSlotDate = new Date(previous);
  newSlotDate.setDate(newSlotDate.getDate() + 1);
  weeklyPlan.set(newSlotDate.getTime(), {
    [item.category]: item,
  });
  notifyAlertItemAdded(newSlotDate);
  renderSelectedDayPlan();
}

function getWeeklyPlanItemHTML(recipeItem) {
  function getIconEl() {
    switch (recipeItem.category) {
      case "breakfast":
        return `<i class="fa-solid fa-alarm-clock text-success" title="Breakfast"></i>`;
      case "lunch":
        return `<i class="fa-solid fa-sun text-success" title="Lunch"></i>`;
      case "dinner":
        return `<i class="fa-solid fa-moon text-success" title="Dinner"></i>`;
      default:
        return "";
    }
  }

  /** This is needed to use openRecipe function */
  const recipeGlobalIndex = recipes.findIndex(
    (recipe) => recipe.id === recipeItem.id,
  );

  return `
    <div class="weekly-item">
        <div class="weekly-icon">
            ${getIconEl()}
        </div>
        <img
            src="${recipeItem.image}"
            onerror="this.onerror=null; this.src='images/recipe-placeholder.png';"
            alt="Recipe Image"
        />
        <div class="weekly-info">
            <h6>${recipeItem.name}</h6>
            <div class="weekly-actions">
                <button
                    class="btn btn-outline-success btn-sm"
                    onclick="openRecipe(recipes[${recipeGlobalIndex}])"
                >
                    <i class="fa-solid fa-eye"></i>
                </button>
                <i
                    class="fa-regular fa-trash-can text-danger cursor-pointer"
                    onclick="removeItemFromSelectedDay('${recipeItem.category}')"
                ></i>
            </div>
        </div>
    </div>
`;
}

/** Renders selected day plan. If nothing is in the plan it will render empty block */
function renderSelectedDayPlan() {
  const labelEl = document.getElementById("selectedDayLabel");
  labelEl.innerText = `${selectedDay.toLocaleDateString()} - ${daysOfWeek[selectedDay.getDay()]}`;
  let selectedDayRecipes = weeklyPlan.get(selectedDay.getTime());
  const containerEl = document.getElementById("weeklyItemsContainer");
  if (!selectedDayRecipes) {
    containerEl.innerHTML = "";
    return;
  }

  containerEl.innerHTML = ["breakfast", "lunch", "dinner"]
    .map((key) =>
      selectedDayRecipes[key]
        ? getWeeklyPlanItemHTML(selectedDayRecipes[key])
        : "",
    )
    .join("");
}

/** Calculates all ingredients for currently selected day. Accumulates same ingredients quantity. */
function getSelectedDayGroupedIngredients() {
  let selectedDayRecipes = weeklyPlan.get(selectedDay.getTime());
  let ingredients = ["breakfast", "lunch", "dinner"].flatMap((key) =>
    selectedDayRecipes[key] ? selectedDayRecipes[key].ingredients : [],
  );

  return ingredients.reduce((acc, curr) => {
    const idx = acc.findIndex((rec) => rec.name === curr.name);
    if (idx === -1) {
      acc.push({ ...curr });
    } else {
      acc[idx].quantity += curr.quantity;
    }

    return acc;
  }, []);
}

/** TEMPORARY: example on how to get selected day grouped ingredients. */
function showSelectedDayGroupedIngredients() {
  const ingredients = getSelectedDayGroupedIngredients();
  console.log(ingredients);

  const message = ingredients.map(
    (ing) => `${ing.name}: ${ing.quantity}${ing.unit}`,
  ).join('\n');

  const selectedDayLabel = `${selectedDay.toLocaleDateString()} - ${daysOfWeek[selectedDay.getDay()]}`;

  // IVAN START
  showModal(
      `Ingredients for ${selectedDayLabel}`,
      message.replaceAll("\n", "<br>")
  );
  // IVAN END
}

/** Once script is loaded set random weekly plan and render it */
setRandomDailyPlan();
renderSelectedDayPlan();
