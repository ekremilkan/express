const baseResponse = require("../dto/baseResponse.dto");
const Product = require("../model/product.model");
const service = require("../service/index");
const { StatusCodes } = require("http-status-codes");

exports.createProduct = async (req, res) => {
  try {
    const product = await service.productService.createProduct(req);
    res
      .json({
        ...baseResponse,
        messagee: "Urun olusturuldu",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Urun olusturulamadi",
        error: error,
        errorMessage: error.message,
        succes: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, description, stock, price, category } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, stock, category, price },
      { new: true }
    );
    res
      .json({
        ...baseResponse,
        data: updatedProduct,
        message: "Urun basariyla guncellendi",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Urun guncellenemedi!",
        error: error,
        errorMessage: error.message,
        success: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await service.productService.getAllProducts(req);
    res
      .json({
        ...baseResponse,
        data: products,
        message: "Urunler listelendi",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Urunler listelenemedi",
        error: error,
        errorMessage: error.message,
        succes: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await service.productService.getProductById(req);
    res
      .json({
        ...baseResponse,
        messagee: "Urun bulundu",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Urun bulunamadi",
        error: error,
        errorMessage: error.message,
        succes: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductsByCategory = async (req, res) => {
  try {
    const product = await service.productService.getProductsByCategory(req);
    res
      .json({
        ...baseResponse,
        messagee: "Urunler bulundu",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Urunler bulunamadi",
        error: error,
        errorMessage: error.message,
        succes: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductByName = async (req, res) => {
  try {
    const product = await service.productService.getProductByName(req);
    res
      .json({
        ...baseResponse,
        messagee: "Urun bulundu",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Urun bulunamadi",
        error: error,
        errorMessage: error.message,
        succes: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductsByStock = async (req, res) => {
  try {
    const product = await service.productService.getProductsByStock(req);
    res
      .json({
        ...baseResponse,
        messagee: "Urunler bulundu",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Urunler bulunamadi",
        error: error,
        errorMessage: error.message,
        succes: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductsByPrice = async (req, res) => {
  try {
    const product = await service.productService.getProductsByPrice(req);
    res
      .json({
        ...baseResponse,
        messagee: "Urunler bulundu",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Urunler bulunamadi",
        error: error,
        errorMessage: error.message,
        succes: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
