const faker = require('faker');

class ProductService {

    constructor() {
        this.products = [];
        this.generate();
    }

    generate() {
        for (let index = 0; index < 100; index++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl()
            })
        }
    }

    create(data) {
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }

    find() {
        return this.products;
    }

    findOne(id) {
        return this.products.find(product => product.id === id);
    }

    update(id, changes) {
        const index = this.products.findIndex(product => product.id === id);
        if(index === -1){
            throw new Error('product not found');
        }
        this.products[index] = {...this.products[index], ...changes};
        return this.products[index]
    }

    delete(id) {
        const index = this.products.findIndex(product => product.id === id);
        if(index === -1){
            throw new Error('product not found');
        }
        this.products.splice(index, 1);
        return {id};
    }
}

module.exports = ProductService;