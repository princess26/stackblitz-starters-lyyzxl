const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello, this is your server!');
});
const port = 3000; // Choose any port number you prefer

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
