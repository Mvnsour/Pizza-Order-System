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
  const newOrder = { id: nextOrderId++ ,pizza: selectedPizza, status: "ordered" };
  orderQueue.push(newOrder);
  return newOrder
}

let nextOrderId = 1;

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 * 
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */

function completeOrder(orderId) {
  const order = orderQueu.find(order.id === orderId);
  order.status = "completed";
  return order;
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder("1")

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)