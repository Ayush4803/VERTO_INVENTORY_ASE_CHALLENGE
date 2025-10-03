const ProductRepository = require('../repository/product-repository');
const AppError = require('../utils/app-error');

class ProductService {
    constructor() {
        this.productRepository = new ProductRepository();
    }

    async createProduct(data) {
        if (data.stock_quantity !== undefined && data.stock_quantity < 0) {
            throw new AppError("Stock cannot be negative", 400);
        }
        return await this.productRepository.create(data);
    }

    async getProduct(id) {
        const product = await this.productRepository.findById(id);
        if (!product) throw new AppError("Product not found", 404);
        return product;
    }

    async getProducts() {
        return await this.productRepository.findAll();
    }

    async updateProduct(id, data) {
        const product = await this.getProduct(id);
        if (data.stock_quantity !== undefined && data.stock_quantity < 0) {
            throw new AppError("Stock cannot be negative", 400);
        }
        return await this.productRepository.update(product, data);
    }

    async deleteProduct(id) {
        const product = await this.getProduct(id);
        return await this.productRepository.delete(product);
    }

    async increaseStock(id, amount) {
        if (amount <= 0) throw new AppError("Amount must be positive", 400);
        const product = await this.getProduct(id);
        product.stock_quantity += amount;
        return await product.save();
    }

    async decreaseStock(id, amount) {
        if (amount <= 0) throw new AppError("Amount must be positive", 400);
        const product = await this.getProduct(id);
        if (product.stock_quantity < amount) throw new AppError("Insufficient stock", 400);
        product.stock_quantity -= amount;
        return await product.save();
    }
}

// ✅ Export an instance
module.exports = new ProductService();
