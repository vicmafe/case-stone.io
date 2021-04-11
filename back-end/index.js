const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send("Hello Stone");
});

app.listen(port, () => console.log(`app listen on port ${PORT}`));
