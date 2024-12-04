const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Missing error handling if user object is malformed or missing
  console.log(user.name); //Error occurs here if user doesn't have a name
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));