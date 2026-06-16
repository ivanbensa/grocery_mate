let shoppingItems = [];
let tableBody = document.getElementById("shoppingTableBody");
let toInventoryBtn = document.getElementById("ShoppingDoneBtn");
let addToShoppingListBtn = document.getElementById("addToShoppingListBtn");
let clearBtn = document.getElementById("shoppingclearBtn");
let moveToInventoryChBX = document.getElementById("moveToInventory");

let inventoryTableBody = document.getElementById("invTableBody");

let shoppingFormContainer = document.createElement("div");
let table = tableBody.closest("table");
table.parentElement.insertBefore(shoppingFormContainer, table);

//Move all to Inventory

toInventoryBtn.addEventListener("click", () => {
    if (shoppingItems.length === 0)
    {
        //IVAN START
        showModal(
            "Shopping List Empty ⚠️",
            "Your Shopping List is empty."
        );
        //IVAN END
        return;
    }
    moveToInventoryTable();
    //IVAN START
    showModal(
        "Items Moved Successfully ✅",
        "All items from Shopping List have been moved to My Shelf."
    );
    //IVAN END
    displayShoppingTable();
});


let editIndex = null;

function showShoppingForm (index = null)
{
    editIndex = index;
    let itemVal = "";
    let qtyVal = "";
    let unit = "";     // add unit

    if (index !== null)
    {
        itemVal = shoppingItems[index][0];
        qtyVal = shoppingItems[index][1];
        unit = shoppingItems[index][2];    // add unit
    }
    //Form to get the input values for new/updating the shopping list
    shoppingFormContainer.innerHTML = `
        <div class="mb-3">
        <input type="text" id="shopItemInput" class="form-control mb-2" placeholder="Item Name" value="${itemVal}">
        <input type="number" id="shopQtyInput" class="form-control mb-2" placeholder="Quantity" value="${qtyVal}">
        <select class="form-select mb-2" id="ingredientUnit">
            <option value="g" ${unit === 'g' ? 'selected' : ''}>g</option>
            <option value="ml" ${unit === 'ml' ? 'selected' : ''}>ml</option>
            <option value="piece" ${unit === 'piece' ? 'selected' : ''}>piece</option>
        </select>
        <button class="btn btn-success btn-sm me-2" id="saveItemBtn">${index !== null ? 'Update' : 'Add'}</button>
        <button class="btn btn-outline-secondary btn-sm" id="cancelItemBtn">Cancel</button>
        </div>
    `;

    let saveBtn = document.getElementById("saveItemBtn");
    let cancelBtn = document.getElementById("cancelItemBtn");

    saveBtn.addEventListener("click", () => {
        let itemName = document.getElementById("shopItemInput").value.trim();
        let quantity = document.getElementById("shopQtyInput").value.trim();
        let unit = document.getElementById("ingredientUnit").value.trim();

        if (itemName === "" || quantity === "" || unit === "")
        {
            //alert("Please fill all fields");

            //IVAN START
            showModal(
                "Missing Information ⚠️",
                "Please fill in all fields."
            );
            //IVAN END
            return;
        }

        if (editIndex === null)
        {
            addToShoppingList(itemName, quantity, unit);
        }

        else
        {
            shoppingItems[editIndex][0] = itemName;
            shoppingItems[editIndex][1] = quantity;
            shoppingItems[editIndex][2] = unit;  // add unit
        }

        shoppingFormContainer.innerHTML = "";
        displayShoppingTable();
    });

    cancelBtn.addEventListener("click", () => {
        shoppingFormContainer.innerHTML = "";
    });
}

function addToShoppingList(name, quantity, unit) {
    const normalizedName = name.trim().toLowerCase();
    const normalizedUnit = (unit || "").trim().toLowerCase();
    const existingIndex = shoppingItems.findIndex(
        (item) =>
            item[0].trim().toLowerCase() === normalizedName &&
            (item[2] || "").trim().toLowerCase() === normalizedUnit,
    );

    if (existingIndex === -1) {
        shoppingItems.push([name.trim(), quantity, unit]);
    } else {
        const currentQty = Number(shoppingItems[existingIndex][1]);
        const addedQty = Number(quantity);

        if (!Number.isNaN(currentQty) && !Number.isNaN(addedQty)) {
            shoppingItems[existingIndex][1] = String(currentQty + addedQty);
        } else {
            shoppingItems[existingIndex][1] = quantity;
        }
    }

    displayShoppingTable();
}

function addMissingDailyIngredientsToShoppingList() 
{
    let requiredIngredients = getSelectedDayGroupedIngredients();
    let addCounter = 0;

    for (let i = 0; i < requiredIngredients.length; i++) {
        let required = requiredIngredients[i];

        let availableQty = 0;
        for (let j = 0; j < inventory.items.length; j++) {
            let invItem = inventory.items[j];
            if (
                invItem.name.trim().toLowerCase() === required.name.trim().toLowerCase() &&
                (invItem.unit || "").trim().toLowerCase() === (required.unit || "").trim().toLowerCase()
            ) {
                availableQty = Number(invItem.quantity);
                break;
            }
        }

        let missingQty = Number(required.quantity) - availableQty;
        if (missingQty > 0) {
            addToShoppingList(required.name.trim(), String(missingQty), required.unit);
            addCounter++;
        }
    }

    if (addCounter > 0) {
        showModal(
            "Shopping List Updated 🛒",
            `Added ${addCounter} missing ingredient${addCounter === 1 ? "" : "s"} to the cart.`,
        );
    } else {
        showModal(
            "Inventory has enough ingredients for the selected day.", "All set!!"
        );
    }
}

function displayShoppingTable() {

    tableBody.innerHTML = "";

    if (shoppingItems.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="3" class="text-center py-5 empty-recipes">
                    <i class="fa-solid fa-cart-shopping fs-1 text-muted"></i>

                    <h5 class="mt-3">
                        Your cart is empty
                    </h5>

                    <p class="text-muted">
                        Add items to your shopping cart.
                    </p>
                </td>
            </tr>
        `;

        return;
    }

    for (let i = 0; i < shoppingItems.length; i++) {
        tableBody.innerHTML += `
            <tr>
                <td>${shoppingItems[i][0]}</td>
                <td>${shoppingItems[i][1]}</td>
                <td>${shoppingItems[i][2]}</td>
                <td class="text-end">
                    <i class="fa fa-check" onclick="moveToInventoryTable(${i})"></i>
                    <i class="fa-solid fa-pen me-3 edit-btn" onclick="showShoppingForm(${i})"></i>
                    <i class="fa-regular fa-trash-can text-danger delete-btn" onclick="deleteItem(${i})"></i>
                </td>
            </tr>
        `;
    }
}



function moveToInventoryTable(index=null)
{
    if (index===null)
    {

        for (let i = 0; i < shoppingItems.length; i++)        {
            console.log(i)
            inventory.addItem(shoppingItems[i][0], shoppingItems[i][1],shoppingItems[i][2]);
        } shoppingItems = [];
    }    else    {
        inventory.addItem(shoppingItems[index][0], shoppingItems[index][1], shoppingItems[index][2]);
        deleteItem(index);    }


}

addToShoppingListBtn.addEventListener("click", function (e) {
    showShoppingForm();
    e.preventDefault();
});

clearBtn.addEventListener("click", function () 
{
   shoppingItems = [];
   displayShoppingTable(); 
});

function deleteItem(index)
{
    shoppingItems.splice(index,1);
    displayShoppingTable();
}

function editItem(index)
{
    showShoppingForm(index);
}

function addOrUpdateShoppingItem(name, quantity)
{
    const normalized = name.trim().toLowerCase();
    const existingIndex = shoppingItems.findIndex(
        (item) => item[0].trim().toLowerCase() === normalized,
    );

    if (existingIndex === -1)
    {
        shoppingItems.push([name.trim(), quantity.trim()]);
    }
    else
    {
        shoppingItems[existingIndex][1] = quantity.trim();
    }

    displayShoppingTable();
}

displayShoppingTable();
