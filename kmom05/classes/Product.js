export class Product {
    
    constructor(id, name, price, stock, description, category) {
        this.id = id
        this.name = name
        this.description = description
        this.stock = stock
        this.price = price
        this.category = category
    }
    
    getName() {
        return this.name
    }

    setName(newName) {
        this.name = newName
    }

    getCategory() {
        return this.category
    }

    getStock() {
        return this.stock > 0
    }
        
    reduceStock(quantity) {
        this.stock -= quantity
    }
    
    restoreStock(quantity) {
        this.stock += quantity
    }

    // produktinfo
    getInfo() {
        return `${this.name} - ${this.price} kr \n ${this.description} \n (${this.stock} stycken i lager)`
    }
}
