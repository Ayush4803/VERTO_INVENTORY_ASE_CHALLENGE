const { Product } = require('../models');

class ProductRepository {
    async create(data) {
        return await Product.create(data);
    }

    async findAll() {
        return await Product.findAll();
    }

    async findById(id) {
        return await Product.findByPk(id);
    }

    async update(product, data) {
        return await product.update(data);
    }

    async delete(product) {
        return await product.destroy();
    }
}

module.exports = ProductRepository;
