class InventoryItem {
    constructor(name, quantity) {
        this.id       = Date.now();
        this.name     = name;
        this.quantity = quantity;
    }
}

class Inventory {
    constructor() {
        this.items = [];
    }

    renderTable() {
        const tbody = document.getElementById('invTableBody');
        tbody.innerHTML = '';

        this.items.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td class="text-end">
                    <i class="fa-solid fa-pen me-3" onclick="inventory.editItem(${item.id})"></i>
                    <i class="fa-regular fa-trash-can text-danger" onclick="inventory.removeItem(${item.id})"></i>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    showForm() {
    const container = document.getElementById('invFormContainer');
    container.innerHTML = `
        <div class="mb-3">
            <input type="text" id="invName" class="form-control mb-2" placeholder="Item name">
            <input type="text" id="invQuantity" class="form-control mb-2" placeholder="Quantity (e.g. 2 cups)">
            <button class="btn btn-success btn-sm me-2" onclick="inventory.confirmAdd()">Save</button>
            <button class="btn btn-outline-secondary btn-sm" onclick="inventory.hideForm()">Cancel</button>
        </div>
    `;
 }

    hideForm() {
        document.getElementById('invFormContainer').innerHTML = '';
    }

        addItem(name, quantity) {
        if (name.trim() === '') {
            alert('Please enter an item name.');
            return;
        }
        if (quantity.trim() === '') {
            alert('Please enter a quantity.');
            return;
        }

        const item = new InventoryItem(name, quantity);
        this.items.push(item);
        this.renderTable();
    }

    confirmAdd() {
    const name     = document.getElementById('invName').value;
    const quantity = document.getElementById('invQuantity').value;
    inventory.addItem(name, quantity);
    this.hideForm();
       
 }
 removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.renderTable();
}
        
}

const inventory = new Inventory();

document.getElementById('invAddBtn').addEventListener('click', () => {
    inventory.showForm();
});

