const { Router } = require('express');
const { userRegister, findUserByEmail } = require('../Service/userService');

const registerController = Router();

registerController.post('/', async (req, res) => {
  const user = req.body;
  const { email } = user;
  const searchEmail = await findUserByEmail(email);
  console.log('existe usuario?', searchEmail);
  if (searchEmail) {
    return res.status(200).json({ message: 'Este email já está cadastrado, tente outro email.'})
  }
  const registredUser = await userRegister(user);
  const { name } = registredUser;
  res.status(201).json({ message: `Usuário ${name} foi criado com sucesso!`});
});

module.exports = registerController;
