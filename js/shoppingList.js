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
        alert("Shopping list is empty");
        return;
    }
    moveToInventoryTable();
    alert("All items from Shopping cart moved to Inventory!!");
    displayShoppingTable();
});

let editIndex = null;

function showShoppingForm (index = null)
{
    editIndex = index;
    let itemVal = "";
    let qtyVal = "";
    let units = "";     // add units

    if (index !== null)
    {
        itemVal = shoppingItems[index][0];
        qtyVal = shoppingItems[index][1];
        units = shoppingItems[index][2];    // add units
    }
    //Form to get the input values for new/updating the shopping list
    shoppingFormContainer.innerHTML = `
    <div class="card p-3 mb-3 shadow-sm">
        <div class="row g-2">
            <div class="col-md-5">
                <input type="text" id="shopItemInput" class="form-control" placeholder="Item Name" value="${itemVal}">
            </div>
            <div class="col-md-4">                
                <input type="number" id="shopQtyInput" class="form-control" placeholder="Quantity" value="${qtyVal}">
            </div>
            <div class="col-md-4">                
                <select class="form-select" id="ingredientUnit">
                                    <option value="g">g</option>
                                    <option value="ml">ml</option>
                                    <option value="piece">piece</option>
                                </select>
            </div>

            <div class="col-md-1 d-grid">
                <button class="btn btn-success" id="saveItemBtn">${index !== null?"Update":"Add"}</button>
                <button class="btn btn-secondary mt-2" id="cancelItemBtn">Cancel</button>    
            </div>
        </div>
    </div>`;

    let saveBtn = document.getElementById("saveItemBtn");
    let cancelBtn = document.getElementById("cancelItemBtn");

    saveBtn.addEventListener("click", () => {
        let itemName = document.getElementById("shopItemInput").value.trim();
        let quantity = document.getElementById("shopQtyInput").value.trim();
        let units = document.getElementById("ingredientUnit").value.trim();

        if (itemName === "" || quantity === "" || units === "")
        {
            alert("Please fill all fields");
            return;
        }

        if (editIndex === null)
        {
            shoppingItems.push([itemName, quantity, units]);
        }

        else
        {
            shoppingItems[editIndex][0] = itemName;
            shoppingItems[editIndex][1] = quantity;
            shoppingItems[editIndex][2] = units;  // add units
        }

        shoppingFormContainer.innerHTML = "";
        displayShoppingTable();
    });

    cancelBtn.addEventListener("click", () => {
        shoppingFormContainer.innerHTML = "";
    });
}

/*
function displayShoppingTable()
{
    tableBody.innerHTML = "";

    for(let i = 0; i < shoppingItems.length; i++)
    {
        tableBody.innerHTML += 
        `<tr>
            <td>${shoppingItems[i][0]}</td>
            <td>${shoppingItems[i][1]}</td>
            <td class = "text-end">
                <i class="fa fa-check" onClick="moveToInventoryTable(${i})"></i>
                <i class="fa-solid fa-pen me-3 edit-btn" onClick="showShoppingForm(${i})"></i>
                <i class="fa-regular fa-trash-can text-danger delete-btn" onClick="deleteItem(${i})"></i>
            <td>
        </tr>`;
    }
}
 */
// ivan add
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

        /*for(let i = 0; i < shoppingItems.length; i++)
        {
            inventoryTableBody.innerHTML += 
            `<tr>
                <td>${shoppingItems[i][0]}</td>
                <td>${shoppingItems[i][1]}</td>
                <td>${shoppingItems[i][2]}</td>  <!--add-->
                <td class = "text-end">
                    <i class="fa-solid fa-pen me-3 edit-btn" onClick="showShoppingForm(${i})"></i>
                    <i class="fa-regular fa-trash-can text-danger delete-btn" onClick="deleteItem(${i})"></i>
                <td>
            </tr>`;
       }
       shoppingItems = [];
    }
    else
    {
        inventoryTableBody.innerHTML += 
        `<tr>
            <td>${shoppingItems[index][0]}</td>
            <td>${shoppingItems[index][1]}</td>
            <td>${shoppingItems[index][2]}</td>  <!--add-->
            <td class = "text-end">
                <i class="fa-solid fa-pen me-3 edit-btn"></i>
                <i class="fa-regular fa-trash-can text-danger delete-btn"></i>
            <td>
        </tr>`;
        deleteItem(index);
    }*/


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
