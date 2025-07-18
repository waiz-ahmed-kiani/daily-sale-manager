// Populate customer filter dropdown
const filterCustomer = document.getElementById("filterCustomer");
customers.forEach(c => {
  const opt = document.createElement("option");
  opt.value = c.id;
  opt.textContent = c.name;
  filterCustomer.appendChild(opt);
});

function applyFilters() {
  const date = document.getElementById("filterDate").value;
  const customerId = document.getElementById("filterCustomer").value;
  const type = document.getElementById("filterType").value;

  const filtered = sales.filter(sale => {
    const matchDate = !date || sale.date === date;
    const matchCustomer = !customerId || sale.customerId == customerId;
    const matchType = !type || (type === "credit" && sale.isCredit) || (type === "cash" && !sale.isCredit);
    return matchDate && matchCustomer && matchType;
  });

  renderSales(filtered);
}

function resetFilters() {
  document.getElementById("filterDate").value = "";
  document.getElementById("filterCustomer").value = "";
  document.getElementById("filterType").value = "";
  renderSales(sales);
}

function renderSales(list) {
  const container = document.getElementById("saleList");
  if (list.length === 0) {
    container.innerHTML = "<p>No sales found.</p>";
    return;
  }

  container.innerHTML = list.map(sale => {
    const customer = customers.find(c => c.id === sale.customerId);
    return `
      <div class="sale-item">
        <strong>${customer.name}</strong> — ₹${sale.amount} (${sale.isCredit ? 'Credit' : 'Cash'})<br/>
        <small>${sale.date}</small>
      </div>
    `;
  }).join('');
}

// Initial render
renderSales(sales);

