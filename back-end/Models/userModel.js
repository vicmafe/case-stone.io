const connection = require('./connections');

const userRegister = async (user) => {
  const { name, email, password } = user;
  try {
    await connection
      .execute('INSERT INTO users (name, email, password, favorites) VALUES (?,?,?,?)',
        [name, email, password, '']);
    return user;
  } catch (e) {
    return e.message;
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await connection
      .execute('SELECT *  FROM Trybeer.users WHERE email=?', [email]);
    return user;
  } catch (e) {
    return e.message;
  }
}

module.exports = { 
  userRegister,
  findUserByEmail,
};
