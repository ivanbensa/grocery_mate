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
/*
toInventoryBtn.addEventListener("click", () => {
    if (shoppingItems.length === 0)
    {
        alert("Shopping list is empty");
        return;
    }
    moveToInventoryTable();
    alert("All items from Shopping cart moved to Inventory!!");
    displayShoppingTable();
});
 */

//IVAN START
toInventoryBtn.addEventListener("click", () => {
    if (shoppingItems.length === 0) {
        showModal(
            "Shopping List Empty ⚠️",
            "Your Shopping List is empty."
        );

        return;
    }
    moveToInventoryTable();
    showModal(
        "Items Moved Successfully ✅",
        "All items from Shopping List have been moved to My Shelf."
    );
    displayShoppingTable();
});
//IVAN END



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
            shoppingItems.push([itemName, quantity, unit]);
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
    shoppingItems.push([name, quantity, unit]);
    displayShoppingTable();
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

displayShoppingTable(); 
