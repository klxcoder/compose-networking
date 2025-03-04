const express = require('express');
const app = express();
const { getSecret } = require('./utils');

// Respond with "Hello" at the root path
app.get('/', (req, res) => {
  res.send('Hello from non-root container');
});

app.get('/login', async (req, res) => {
  const secret = getSecret('db_root_password');
  res.send(secret);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Non-root server is running on http://localhost:3000');
});
