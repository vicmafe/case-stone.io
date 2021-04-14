const { Router } = require('express');
const createToken = require('../auth/createToken');
const { userLogin } = require('../Service/userService');

const loginController = Router();

loginController.post('/', async (req, res) => {
  const { email, password } = req.body;
  const payload = { email, password };
  const userLogged = await userLogin(email, password);
  if (!userLogged) return res.status(202).json({ message: "usuário não encontrado, cadastre novo usuário."});
  const token = await createToken(payload);
  res.status(200).json({ userLogged, token });
});

module.exports = loginController;
