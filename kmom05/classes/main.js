import { Product } from './Product.js'
import { Order } from './Order.js'

// till lager-API
const API_KEY = "din_API_key_här"
const API_URL = "https://lager.emilfolino.se/v2/products"


async function fetchProducts() {
    const response = await fetch(`${API_URL}?api_key=${API_KEY}`)
    const data = await response.json();
    
    // skapa Product-objekt från API-data
    // varje produkt från API:t blir ett Product-objekt
    const products = data.data.map(item => 
        //Se konstruktor i Product.js -> constructor(id, name, price, stock, description, category)
        // ordningen spelar roll för de värden vi skickar in
        new Product(item.id, item.name, item.price, item.stock, item.description, item.category)
    );
    
    return products
}

async function main() {
    const products = await fetchProducts()
    
    console.log("Produkter:")
    console.log("-".repeat(50))
    for (let i = 0; i < 5; i++) {
        console.log(`${i + 1}. ${products[i].name} - ${products[i].price}`)
    }
    
    // Skapa en order med beställarinformation
    const order = new Order("ORDERID_eller_liknande", 
        "Emil Folino",                 
        "Gatvägen 66, 666666 Knäckebrödhult",
        "emil@hej.ru"                  
    );
    
    console.log("-".repeat(50))

    // vi lägger till produkter till ordern - produkt-objektet samt antal
    order.addProduct(products[0], 2) // 2 st av första produkten i arrayen product
    order.addProduct(products[1], 1)  
    order.addProduct(products[2], 3)
    
    console.log("\nORDER\n")

    order.displayOrder()
}

main()
