const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expnese-table-body');
const totalAmountCell = document.getElementById('total-amount');

let totalAmount = 0;

addBtn.addEventListener('click', function () {
    const category = categorySelect.value;
    const amount = parseFloat(amountInput.value);
    const date = dateInput.value;

    if (!category || isNaN(amount) || amount <= 0 || !date) {
        alert("Please enter valid inputs");
        return;
    }

    const formData = new FormData();
    formData.append('category', category);
    formData.append('amount', amount);
    formData.append('date', date);

    fetch('insert.php', {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            addExpenseToTable({ category, amount, date });
        } else {
            alert('Error: ' + (data.error || 'Could not add expense.'));
        }
    });
});

function addExpenseToTable(expense) {
    const newRow = expensesTableBody.insertRow();

    newRow.insertCell().textContent = expense.category;
    newRow.insertCell().textContent = expense.amount.toFixed(2);
    newRow.insertCell().textContent = expense.date;

    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount.toFixed(2);
        newRow.remove();
        // Optional: Add PHP code to delete from DB
    });
    deleteCell.appendChild(deleteBtn);

    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount.toFixed(2);
}
