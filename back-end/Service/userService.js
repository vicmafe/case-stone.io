const userModel = require('../Models/userModel');

const userRegister = async (user) => {
  const userRegistered = await userModel.registerUser(user);
  return userRegistered;
};

const userLogin = async (email, password) => {
  const userLogged = await userModel.loginUser(email, password);
  console.log(userLogged)
  const [[BinaryRow]] = userLogged;
  if (BinaryRow) return BinaryRow;
  return false;
};

const findUserByEmail = async (email) => {
  const userExisting = await userModel.searchUserByEmail(email);
  const [[BinaryRow]] = userExisting;
  return BinaryRow;
}

module.exports = {
  userRegister,
  userLogin,
  findUserByEmail,
};
