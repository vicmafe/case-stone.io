const { findUserByEmail } = require('../Models/userModel');

const emailIsValid = (email) => {
  const expectedFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/;
  return expectedFormat.test(email);
};

const verifyUserExists = async (email) => {
  const searchUser = await findUserByEmail(email);
  if (!searchUser) return false;
  return true;
};

const validateDataUser = (req, res, next) => {
  const { name, email, password } = req.body;
  const minCharacter = 3;
  const minPasswordLength = 6;
  if (!name || !email || !password) {
    return res.status(401).send({ message: 'Name, email and password is required'});
  }
  if (name.length < minCharacter) {
    return res.status(401).send({ message: 'The name must be longer than 2 characters'});
  }
  if (password.length < minPasswordLength) {
    return res.status(401).send({ message: 'The password must be longer than 5 characters'});
  }
  if (!emailIsValid(email)) {
    return res.status(401).send({ message: 'Invalid email format'});
  }
  if (!verifyUserExists(email)) {
    return res.status(401).send({ message: 'Email already registered'});
  }
  return next();
};

module.exports = {
  validateDataUser,
}