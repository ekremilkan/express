const Liked = require("../model/liked.model");
const User = require("../model/user.model");
const Product = require("../model/product.model");

exports.likedProduct = async (req) => {
  try {
    const { userId, productId } = req.body;
    // Kullanici ve urun var mi kontrol et
    const user = await User.find({ _id: userId });
    if (!user) {
      throw new Error("Kullanici bulunamadi");
    }
    const product = await Product.find({ _id: productId });
    if (!product) {
      throw new Error("Urun bulunamadi");
    }
    const json = new Liked({
      userId: userId,
      productId: productId,
    });
    await json.save();
    return json;
  } catch (error) {
    throw new Error(error.message);
  }
};

// getLikedByUser, getLikedById, getLikedByProduct
