const express = require('express');
const registerController = require('./Controller/registerController');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());


app.use('/register', registerController);

app.get('/', (_req, res) => {
  res.send("Hello Stone");
});

app.listen(port, () => console.log(`app listen on port ${PORT}`));
