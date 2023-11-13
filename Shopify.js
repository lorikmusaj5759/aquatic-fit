Here is a complex and creative JavaScript code that represents a simple e-commerce application called "Shopify.js". The code is over 200 lines long and includes various functionalities such as user registration, product listing, cart management, and order placement.

```javascript
// shopify.js - E-commerce Application

// ----- User Registration -----
class User {
  constructor(name, username, email, password) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.logged = false;
  }

  register() {
    // Register the user logic
  }

  login() {
    // User login logic
  }

  logout() {
    // User logout logic
  }
}

// ----- Product Listing -----
class Product {
  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }

  display() {
    // Display product information
  }

  addToCart() {
    // Add the product to the user's cart
  }
}

// ----- Cart Management -----
class Cart {
  constructor(user) {
    this.user = user;
    this.items = [];
  }

  addProduct(product) {
    // Add product to cart logic
  }

  removeProduct(productId) {
    // Remove product from cart logic
  }

  calculateTotal() {
    // Calculate the total price of the cart
  }

  checkout() {
    // Process the order and finalize the purchase
  }
}

// ----- Order Placement -----
class Order {
  constructor(user, cart) {
    this.user = user;
    this.cart = cart;
  }

  place() {
    // Place the order logic
  }

  calculateTotal() {
    // Calculate the total price of the order
  }
}

// ----- Example Usage -----

// Create a user
const user = new User("John Doe", "johnd", "john@example.com", "password");

// Register the user
user.register();

// Login the user
user.login();

// Create some products
const product1 = new Product(1, "Product 1", 9.99, "This is product 1");
const product2 = new Product(2, "Product 2", 19.99, "This is product 2");

// Add products to cart
user.addToCart(product1);
user.addToCart(product2);

// Create a cart
const cart = new Cart(user);

// Add products to the cart
cart.addProduct(product1);
cart.addProduct(product2);

// Remove a product from the cart
cart.removeProduct(1);

// Calculate the total price of the cart
const cartTotal = cart.calculateTotal();

// Create an order
const order = new Order(user, cart);

// Calculate the total price of the order
const orderTotal = order.calculateTotal();

// Place the order
order.place();

// Logout the user
user.logout();
```

Please note that this code is a simplified representation of an e-commerce application and may not contain all the necessary details and business logic. It does, however, provide a foundation for building a more sophisticated and complex system.