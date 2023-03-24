var stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};
var order = function (fruit_name, call_production) {
    setTimeout(function () {
        console.log("".concat(stocks.Fruits[fruit_name], " was selected"));
        // Order placed. Call production to start
        call_production();
    }, 2000);
};
// 2nd Function
var production = function () {
    setTimeout(function () {
        console.log("production has started");
        setTimeout(function () {
            console.log("The fruit has been chopped");
            setTimeout(function () {
                console.log("".concat(stocks.liquid[0], " and ").concat(stocks.liquid[1], " Added"));
                setTimeout(function () {
                    console.log("start the machine");
                    setTimeout(function () {
                        console.log("Ice cream placed on ".concat(stocks.holder[1]));
                        setTimeout(function () {
                            console.log("".concat(stocks.toppings[0], " as toppings"));
                            setTimeout(function () {
                                console.log("serve Ice cream");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0);
};
// Trigger
order(0, production);
