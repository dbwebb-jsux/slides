export class Order {
    constructor(orderNumber, customerName, customerAddress, customerEmail) {
        // ordernumer
        this.orderNumber = orderNumber;
        this.orderDate = new Date();
        
        // kund, beställare
        this.customerName = customerName;
        this.customerAddress = customerAddress;
        this.customerEmail = customerEmail;
        
        // produkter som ska ingå i ordern
        this.items = [];
    }
    
    //lägga till en produkt till order
    addProduct(product, quantity = 1) {
        this.items.push({
            product: product,
            quantity: quantity
        });
    }
    
    // totalt pris
    getTotalPrice() {
        let total = 0;
        
        for (let item of this.items) {
            total += item.product.price * item.quantity;
        }
        
        return total;
    }
    
    //skriva ut/visa order
    displayOrder() {
        console.log(`Ordernummer #${this.orderNumber}`)
        console.log(`Datum: ${this.orderDate.toLocaleDateString('sv-SE')}`)
        
        //'kund'-information
        console.log("\nKund:");
        console.log(`Namn:    ${this.customerName}`)
        console.log(`Adress: ${this.customerAddress}`)
        console.log(`Epost:   ${this.customerEmail}`)
        
        //produkter
        console.log("\nOrder items/produkter:")
        
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i]
            const product = item.product
            const subtotal = product.price * item.quantity
            
            console.log(`${i + 1}. ${product.name}`)
            console.log(`   ${product.price} SEK x ${item.quantity} = ${subtotal}`)
        }
        
        // totalsumma
        console.log(`Total summa: ${this.getTotalPrice()} kr eller dollar`)
        console.log("\n")
    }
}