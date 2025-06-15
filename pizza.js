let nextPizzaId = 1;
let cashInRegister = 100;
let nextOrderId = 1;
const menu = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Salmon", price: 15 },
    { id: nextPizzaId++, name: "4 Cheeses", price: 14 },
    { id: nextPizzaId++, name: "Oriental", price: 13 },
    { id: nextPizzaId++, name: "Parisian", price: 10 },
];
const orderQueue = [];
function addNewPizza(pizza) {
    pizza.id = nextPizzaId++;
    menu.unshift(pizza);
}
function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizza => pizza.name === pizzaName);
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId);
    if (!order) {
        console.error(`Order with ID ${orderId} does not exist`);
        return;
    }
    order.status = "completed";
    return order;
}
function getPizzaDetail(identifier) {
    if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier);
    }
    else if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
    }
    else {
        throw new TypeError(`${identifier} must be a number or a string`);
    }
}
addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "Queen", price: 13 });
// completeOrder(1)
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
let id = 1;
const users = [{
        id: id,
        username: "marcus",
        role: "admin"
    }, {
        id: id++,
        username: "tim",
        role: "user"
    }, {
        id: id++,
        username: "tom",
        role: "guest"
    }];
function updateUser(id, updates) {
    const foundUser = users.find(user => user.id === id);
    if (!foundUser) {
        console.error("User not found");
        return;
    }
    Object.assign(foundUser, updates);
}
updateUser(id++, { username: "Ibrahim" });
updateUser(id++, { role: "admin" });
console.log("Users after update:", users);
function addUser(user) {
    users.push(user);
}
addUser({ id: id++, username: "newUser", role: "user" });
console.log("Users before adding new user:", users);
