const menu = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Salmon", price: 15 },
    { id: 3, name: "4 Cheeses", price: 14 },
    { id: 4, name: "Oriental", price: 13 },
    { id: 5, name: "Parisian", price: 10 },
];
let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];
function addNewPizza(pizza) {
    menu.push(pizza);
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
addNewPizza({ id: 6, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: 7, name: "Hawaiian", price: 12 });
addNewPizza({ id: 8, name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
