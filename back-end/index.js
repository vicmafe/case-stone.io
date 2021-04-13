const express = require('express');
const cors = require('cors');
const registerController = require('./Controller/registerController');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8001;
app.use(cors());

app.use(bodyParser.json());


app.use('/register', registerController);

app.get('/', (_req, res) => {
  res.send("Hello Stone");
});

app.listen(PORT, () => console.log(`app listen on port ${PORT}`));