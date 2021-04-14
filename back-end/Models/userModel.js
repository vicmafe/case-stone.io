const connection = require('./connections');

const registerUser = async (user) => {
  const { name, email, password } = user;
  try {
    await connection
      .execute('INSERT INTO users (name, email, password, favorites) VALUES (?,?,?,?)',
        [name, email, password, '']);
    return user;
  } catch (e) {
    return null;
  }
};

const loginUser = async (emailUser, passwordUser) => {
  try {
    const userLoged = await connection
      .execute('SELECT * FROM users WHERE email=? and password=?', [emailUser, passwordUser]);
    return userLoged;
  } catch (e) {
    return null;
  }
};

const searchUserByEmail = async (email) => {
  try {
    const user = await connection
      .execute('SELECT *  FROM users WHERE email=?', [email]);
    return user;
  } catch (e) {
    return null;
  }
};

module.exports = { 
  registerUser,
  loginUser,
  searchUserByEmail,
};
