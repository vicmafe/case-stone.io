const userModel = require('../Models/userModel');

const userRegister = async (user) => {
  const userCreate = await userModel.userRegister(user);
  return userCreate;
};

module.exports = { userRegister };
