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
    const newPizza = Object.assign({ 
        // and assign a new id to the pizza object
        id: nextPizzaId++ }, pizza);
    menu.push(newPizza);
    return newPizza; // Return the new pizza object
}
addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "Queen", price: 13 });
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
// completeOrder(1)
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
let userId = 1;
const users = [{
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
    }];
