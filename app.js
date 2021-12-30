const express = require('express');

const app = express();
const PORT = 8000;

app.get('/api', (req, res) => {
  res.send('text')
})

app.listen(PORT, () => {
  console.log(`started: ${PORT}`);
})