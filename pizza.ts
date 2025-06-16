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

/**
 * Challenge:
 * Fix the addNewPizza function using the Omit utility type. This might
 * require more than just changing the "Pizza" typed `pizzaObj` parameter.
 * Return the new pizza object (with the id added) from the function.
 */

function addNewPizza(pizza: Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza = { // Omit the id property from the input
    // and assign a new id to the pizza object
    id: nextPizzaId++, 
    ...pizza
  } 
  menu.push(newPizza);
  return newPizza; // Return the new pizza object
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "Queen", price: 13 })

function placeOrder(pizzaName: string) : Order | undefined { // added return type for clarity
  const selectedPizza = menu.find(pizza => pizza.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`)
    return;
  }
  cashInRegister+= selectedPizza.price;
  const newOrder: Order = { id: nextOrderId++ ,pizza: selectedPizza, status: "ordered" };
  orderQueue.push(newOrder);
  return newOrder
}

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

// completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)

let userId : number = 1;

type User = {
  userId: number;
  username: string;
  role: "admin" | "user" | "guest";
}

const users : User[] = [{
  userId: userId++,
  username: "marcus",
  role: "admin"
}, {
  userId: userId++,
  username: "tim",
  role: "user"
}, {
  userId: userId++,
  username: "tom",
  role: "guest"
}]

function updateUser(id: any, updates: any) {
  const foundUser = users.find(user => user.userId === id);
  if (!foundUser) {
    console.error("User not found");
    return;
  }
  Object.assign(foundUser, updates);
}
updateUser(userId++, {username:"Ibrahim"});
updateUser(userId++, {role: "admin"});
console.log("Users after update:", users);

function addUser(newUser: Omit<User, "userId">): User {
  const user: User = {
    userId: userId++,
    ...newUser
  }
  users.push(user);
  return user;
}

addUser({ username: "newUser", role: "user" });
console.log("Users before adding new user:", users)