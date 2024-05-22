const Product = require("../model/product.model");
const utils = require("../utils/index");

exports.createProduct = async (req) => {
  try {
    const { name, description, price, stock, category } = req.body;
    const existProduct = await Product.find({ name: name }); //find sorgusunun cevabi array doner
    if (existProduct.length > 0) {
      throw new Error("Bu isimde bir urun bulunmaktadir");
    }
    const product = new Product({
      name,
      description,
      price,
      stock,
      category,
    });
    await product.save();
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateProduct = async (req) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock, category } = req.body;
    const product = await Product.findById(id);
    if (!product) {
      throw new Error("Urun bulunamadi");
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
        stock,
        category,
      },
      { new: true }
    );
    return updatedProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};

//getAll, getByName, getByStock, getByPrice, getByCategory

exports.getAllProducts = async (req) => {
  try {
    const products = await Product.find();
    if (!products) {
      throw new Error("Urunler bulunamadi");
    }
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getProductById = async (req) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new Error("Urun bulunamadi");
    }
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getProductByName = async (req) => {
  try {
    const { name } = req.params;
    const product = await Product.find({ name: name });
    if (!product) {
      throw new Error("Urun bulunamadi");
    }
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getProductsByCategory = async (req) => {
  try {
    const { category } = req.params;
    const products = await Product.find({ category: category });
    if (!products) {
      throw new Error("Urunler bulunamadi");
    }
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getProductsByStock = async (req) => {
  try {
    const { stock } = req.params;
    const products = await Product.find({ stock: stock });
    if (!products) {
      throw new Error("Urunler bulunamadi");
    }
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getProductsByPrice = async (req) => {
  try {
    const { price } = req.params;
    const products = await Product.find({ price: price });
    if (!products) {
      throw new Error("Urunler bulunamadi");
    }
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};
