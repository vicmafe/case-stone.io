const express = require('express');
const cors = require('cors');
const registerController = require('./Controller/registerController');
const loginController = require('./Controller/loginController');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;
app.use(bodyParser.json());


app.use('/register', registerController);
app.use('/login', loginController);

app.get('/', (_req, res) => {
  res.send("Hello Stone");
});

app.listen(PORT, () => console.log(`app listen on port ${PORT}`));