const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log("GET / endpoint hit");
  res.send('Hello from your monitored Node.js app!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

