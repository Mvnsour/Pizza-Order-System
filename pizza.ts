type Pizza = {
  name: string;
  price: number;
}

type Order = {
  id: number;
  pizza: Pizza;
  status: string; // "ordered" or "completed"
}

const menu = [
  { name : "Margherita", price: 8 },
  { name : "Salmon", price: 15 },
  { name : "4 Cheeses", price: 14 },
  { name : "Oriental", price: 13 },
  { name : "Parisian", price: 10 },
]

let cashInRegister: number = 100;
let nextOrderId: number = 1;
const orderQueue: Order[] = [];

function addNewPizza(pizza: Pizza) {
  menu.push(pizza);
}

function placeOrder(pizzaName: string) {
  const selectedPizza = menu.find(pizza => pizza.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`)
    return;
  }
  cashInRegister+= selectedPizza.price;
  const newOrder = { id: nextOrderId++ ,pizza: selectedPizza, status: "ordered" };
  orderQueue.push(newOrder);
  return newOrder
}

function completeOrder(orderId: number) {
  const order = orderQueue.find(order.id === orderId);
  order.status = "completed";
  return order;
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)