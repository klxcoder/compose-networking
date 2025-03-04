const { getSecret } = require('./utils');
const express = require('express');

const app = express();
app.use(express.json()); // Parse JSON body

// Respond with "Hello" at the root path
app.get('/', (req, res) => {
  res.send('Hello from non-root container');
});

app.post('/login', async (req, res) => {
  const body = req.body;
  const password = body.password;
  const secret = getSecret('db_root_password');
  if (password === secret) {
    res.send('Login success!');
  } else {
    res.send('Login fail!');
  }
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Non-root server is running on http://localhost:3000');
});
