const productService = require('../services/product-service');

exports.create = async (req, res, next) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) { next(err); }
};

exports.getAll = async (req, res, next) => {
  try {
    const products = await productService.getProducts();
    res.json(products);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const product = await productService.getProduct(req.params.id);
    res.json(product);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);
    res.json(product);
  } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.status(204).send();
  } catch (err) { next(err); }
};

exports.increase = async (req, res, next) => {
  try {
    const product = await productService.increaseStock(req.params.id, req.body.amount);
    res.json(product);
  } catch (err) { next(err); }
};

exports.decrease = async (req, res, next) => {
  try {
    const product = await productService.decreaseStock(req.params.id, req.body.amount);
    res.json(product);
  } catch (err) { next(err); }
};
