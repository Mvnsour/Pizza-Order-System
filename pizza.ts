type Pizza = {
  id: number;
  name: string;
  price: number;
}

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
}

let nextPizzaId: number = 1;
let cashInRegister: number = 100;
let nextOrderId: number = 1;

const menu: Pizza[] = [
  { id: nextPizzaId++, name : "Margherita", price: 8 },
  { id: nextPizzaId++, name : "Salmon", price: 15 },
  { id: nextPizzaId++, name : "4 Cheeses", price: 14 },
  { id: nextPizzaId++, name : "Oriental", price: 13 },
  { id: nextPizzaId++, name : "Parisian", price: 10 },
]

const orderQueue: Order[] = [];

function addNewPizza(pizza: Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza = { // Omit the id property from the input
    // and assign a new id to the pizza object
    id: nextPizzaId++, 
    ...pizza
  } 
  menu.push(newPizza);
  return newPizza; // Return the new pizza object
}

addNewPizza({ name: "Chicken", price: 12 });
addNewPizza({ name: "Queen", price: 13 });

function placeOrder(pizzaName: string) : Order | undefined { // added return type for clarity
  const selectedPizza = menu.find(pizza => pizza.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`)
    return;
  }
  cashInRegister+= selectedPizza.price;
  const newOrder: Order = { id: nextOrderId++ ,pizza: selectedPizza, status: "ordered" };
  orderQueue.push(newOrder);
  return newOrder;
}

function addToArray<T>(array: T[], item: T): T[] {
    array.push(item);
    return array;
}
// Example usage
addToArray(menu, {id: nextPizzaId++, name: "4 Seasons", price: 12 });
addToArray(orderQueue, { id: nextOrderId++, pizza: menu[4], status: "completed" });
addToArray(orderQueue, { id: nextOrderId++, pizza: menu[5], status: "completed" });
addToArray(orderQueue, { id: nextOrderId++, pizza: menu[menu.length - 1], status: "ordered" });

console.log(menu);
console.log(orderQueue);

function completeOrder(orderId: number) : Order | undefined {
  const order = orderQueue.find(order => order.id === orderId);
  if (!order) {
    console.error(`Order with ID ${orderId} does not exist`);
    return;
  }
  order.status = "completed";
  return order;
}

function getPizzaDetail(identifier: number | string) : Pizza | undefined {
  if (typeof identifier === "number") {
    return menu.find(pizza => pizza.id === identifier);
  } else if (typeof identifier === "string") {
    return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
  } else {
    throw new TypeError(`${identifier} must be a number or a string`);
  }
}