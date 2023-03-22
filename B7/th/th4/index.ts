class Product {
    name: string;
    price: number;
    amount: number;
    constructor(name: string, price: number, amount: number) {
        this.name = name;
        this.price = price;
        this.amount = amount;
    }

    addProduct(extraQuantity: number) {
        this.amount += extraQuantity;
    }
}

class Customer {
    name: string;
    quantityOfProducts: number;
    constructor(name: string, quantityOfProducts: number) {
        this.name = name;
        this.quantityOfProducts = quantityOfProducts;
    }

    buyProduct(product: Product, quantity: number) {
        if (product.amount > quantity) {
            product.amount -= quantity
            this.quantityOfProducts += quantity;
        } else {
            console.log('Out of product');
            return;
        }
    }
}

let shirt = new Product('shirt', 300000, 20);
shirt.addProduct(10);
console.log(shirt.amount, 'Amount product');

let customer1 = new Customer('customer1', 0);
customer1.buyProduct(shirt, 4);
console.log(customer1.quantityOfProducts, 'Quantity of product customer');
console.log(shirt.amount, 'Amount product after customer buy');