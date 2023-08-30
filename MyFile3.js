function sayHello(target) {
    return "Hello ".concat(target.firstname, ", you have ").concat(target.money, " on your bank account.");
}
var message = sayHello({ firstname: 'thierry', money: 123 });
