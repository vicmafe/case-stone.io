const connection = require('./connections');

const userRegister = async (user) => {
  const { name, email, password } = user;
  try {
    await connection
      .execute('INSERT INTO users (name, email, password) VALUES (?,?,?)',
        [name, email, password]);
    return user;
  } catch (e) {
    return e.message;
  }
};

module.exports = { userRegister };
