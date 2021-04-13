const { Router } = require('express');
const { userRegister } = require('../Service/userService');

const registerController = Router();

registerController.post('/', async (req, res) => {
  const user = req.body;
  const registredUser = await userRegister(user);
  const { name } = registredUser;
  res.status(201).json({ message: `Usuário ${name} foi criado com sucesso!`});
});

module.exports = registerController;
