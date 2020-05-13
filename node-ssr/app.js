const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('www'));

app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'www', 'index.html'))
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));