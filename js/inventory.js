class InventoryItem {
    constructor(name, quantity, unit) {
        this.id       = Date.now();
        this.name     = name;
        this.quantity = quantity;
        this.unit    = unit;
    }
}

class Inventory {
    constructor() {
        this.items = [];
    }

    renderTable() {
        const tbody = document.getElementById('invTableBody');
        tbody.innerHTML = '';

        if (this.items.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="4" class="text-center py-5 empty-recipes">
                        <i class="fa-solid fa-box-open fs-1 text-muted"></i>
                        <h5 class="mt-3">Your shelf is empty</h5>
                        <p class="text-muted">Add ingredients to your shelf.</p>
                    </td>
                </tr>
            `;
            return;
        }

        this.items.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.units}</td>
                <td class="text-end">
                    <i class="fa-solid fa-pen me-3" onclick="inventory.editItem(${item.id})"></i>
                    <i class="fa-regular fa-trash-can text-danger" onclick="inventory.removeItem(${item.id})"></i>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    get unitOptionsHTML() {
        return `
            <option value="g">g</option>
            <option value="ml">ml</option>
            <option value="piece">piece</option>
        `;
    }

    showForm() {
        const container = document.getElementById('invFormContainer');
        container.innerHTML = `
            <div class="mb-3">
                <input type="text" id="invName" class="form-control mb-2" placeholder="Item name">
                <input type="number" id="invQuantity" class="form-control mb-2" placeholder="Quantity">
                <select class="form-select mb-2" id="ingredientUnit">
                    ${this.unitOptionsHTML}
                </select>
                <button class="btn btn-success btn-sm me-2" onclick="inventory.confirmAdd()">Save</button>
                <button class="btn btn-outline-secondary btn-sm" onclick="inventory.hideForm()">Cancel</button>
            </div>
        `;
    }

    hideForm() {
        document.getElementById('invFormContainer').innerHTML = '';
    }

    addItem(name, quantity, units) {
        if (name.trim() === '') {
            alert('Please enter an item name.');
            return;
        }
        if (quantity === '' || isNaN(quantity)) {
            alert('Please enter a valid quantity.');
            return;
        }

        const item = new InventoryItem(name, quantity, units);
        this.items.push(item);
        this.renderTable();
    }

    confirmAdd() {
        const name     = document.getElementById('invName').value;
        const quantity = document.getElementById('invQuantity').value;
        const units    = document.getElementById('ingredientUnit').value;
        inventory.addItem(name, quantity, units);
        this.hideForm();
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.renderTable();
    }

    editItem(id) {
        const item = this.items.find(item => item.id === id);
        if (!item) return;

        const unitOptions = `
            <option value="g" ${item.units === 'g' ? 'selected' : ''}>g</option>
            <option value="kg" ${item.units === 'kg' ? 'selected' : ''}>kg</option>
            <option value="ml" ${item.units === 'ml' ? 'selected' : ''}>ml</option>
            <option value="l" ${item.units === 'l' ? 'selected' : ''}>l</option>
            <option value="tsp" ${item.units === 'tsp' ? 'selected' : ''}>tsp</option>
            <option value="tbsp" ${item.units === 'tbsp' ? 'selected' : ''}>tbsp</option>
            <option value="cup" ${item.units === 'cup' ? 'selected' : ''}>cup</option>
            <option value="piece" ${item.units === 'piece' ? 'selected' : ''}>piece</option>
        `;

        const container = document.getElementById('invFormContainer');
        container.innerHTML = `
            <div class="mb-3">
                <input type="text" id="invName" class="form-control mb-2" value="${item.name}">
                <input type="number" id="invQuantity" class="form-control mb-2" value="${item.quantity}">
                <select class="form-select mb-2" id="ingredientUnit">
                    ${unitOptions}
                </select>
                <button class="btn btn-success btn-sm me-2" onclick="inventory.confirmEdit(${item.id})">Save</button>
                <button class="btn btn-outline-secondary btn-sm" onclick="inventory.hideForm()">Cancel</button>
            </div>
        `;
    }

    confirmEdit(id) {
        const item = this.items.find(item => item.id === id);
        if (!item) return;

        const name     = document.getElementById('invName').value;
        const quantity = document.getElementById('invQuantity').value;
        const units    = document.getElementById('ingredientUnit').value;

        if (name.trim() === '') {
            alert('Please enter an item name.');
            return;
        }
        if (quantity === '' || isNaN(quantity)) {
            alert('Please enter a valid quantity.');
            return;
        }

        item.name     = name;
        item.quantity = quantity;
        item.units    = units;

        this.hideForm();
        this.renderTable();
    }

    clearAll() {
        if (confirm('Are you sure you want to clear all items?')) {
            this.items = [];
            this.renderTable();
        }
    }
}

const inventory = new Inventory();

document.getElementById('invAddBtn').addEventListener('click', () => {
    inventory.showForm();
});

document.getElementById('invClearBtn').addEventListener('click', () => {
    inventory.clearAll();
});

inventory.renderTable();
