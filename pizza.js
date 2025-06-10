const menu = [
  { name : "Margherita", price: 8 },
  { name : "Salmon", price: 15 },
  { name : "4 Cheeses", price: 14 },
  { name : "Oriental", price: 13 },
  { name : "Parisian", price: 10 },
]

const cashInRegister = 100;
const orderQueue = [];

function addNewPizza(pizza) {
  menu.push(pizza);
}

function placeOrder(pizzaName) {
  const selectedPizza = menu.find(pizza => pizza.name === pizzaName);
  cashInRegister+= selectedPizza.price;
  const newOrder = { pizza: selectedPizza, status: "ordered" };
  orderQueue.push(newOrder);
  return newOrder
}