const service = require("../service/index");
const baseResponse = require("../dto/baseResponse.dto");
const { StatusCodes } = require("http-status-codes");

exports.addToCart = async (req, res) => {
  try {
    const product = await service.productService.addToCart(req);
    res
      .json({
        ...baseResponse,
        messagee: "Sepete Eklendi",
        data: product,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Sepete Eklenemedi",
        error: error,
        errorMessage: error.message,
        succes: false,
        error: true,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

// exports.createProduct = async (req, res) => {
//   try {
//     const product = await service.productService.createProduct(req);
//     res
//       .json({
//         ...baseResponse,
//         messagee: "Urun olusturuldu",
//         data: product,
//       })
//       .status(StatusCodes.CREATED);
//   } catch (error) {
//     res
//       .json({
//         ...baseResponse,
//         message: "Urun olusturulamadi",
//         error: error,
//         errorMessage: error.message,
//         succes: false,
//         error: true,
//       })
//       .status(StatusCodes.INTERNAL_SERVER_ERROR);
//   }
// };
