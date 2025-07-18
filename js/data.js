// js/data.js

let customers = [
  { id: 0, name: "Walk-in Customer", pending: 0 },
];

let sales = [
];

let payments = [
];

let expenses = [
];

function addCustomer(name) {
  const newId = customers.length ? Math.max(...customers.map(c => c.id)) + 1 : 1;
  customers.push({ id: newId, name: name, pending: 0 });
  return newId;
}
