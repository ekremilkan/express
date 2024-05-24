const User = require("../model/user.model");
const utils = require("../utils/index");
const { StatusCodes } = require("http-status-codes");
const baseResponse = require("../dto/baseResponse.dto");
const service = require("../service/index");

exports.register = async (req, res) => {
  try {
    const isInvalid = utils.helper.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
    }
    const user = await service.userService.register(req);
    res
      .json({ ...baseResponse, data: user, message: "Kayit olusturuldu" })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Kayit olusturulamadi",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await service.userService.getAllUsers(req);
    res
      .json({
        ...baseResponse,
        data: users,
        message: "kullanicilar bulundu",
      })
      .status(StatusCode.OK);
  } catch (error) {}
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user === null) {
      throw new Error("Kullanici bulunamadi");
    }
    res.json({ message: "Kullanici bulundu", data: user }).status(200);
  } catch (error) {
    res
      .json({ message: "Kullanici bulunamadi", error: error.message })
      .status(404);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await service.userService.login(req);
    res
      .json({
        ...baseResponse,
        data: user,
        message: "Giris basarili",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Giris yapilamadi",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const user = await service.userService.resetPassword(req);
    res
      .json({ ...baseResponse, data: user, message: "Sifre yenilendi" })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Sifre yenilenemedi",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await service.userService.updateUser(req);
    res
      .json({ ...baseResponse, data: user, message: "Guncelleme basarili" })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Kullanici guncellenemedi",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.updateProfilePhoto = async (req, res) => {
  try {
    const user = await service.userService.updateProfilePhoto(req);
    res
      .json({ ...baseResponse, data: user, message: "Guncelleme basarili" })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        message: "Kullanici guncellenemedi",
        error: true,
        success: false,
        errorMessage: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
