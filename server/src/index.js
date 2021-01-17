import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import users from './users';
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/users', (req, res) => {
  return res.send(users);
});

app.post('/users', (req, res) => {
  if (
    users.find(
      ({ name, email }) =>
        req.body.name === name && req.body.email === email,
    )
  ) {
    return res
      .status(401)
      .send({ message: 'This user already exists' });
  }
  let newUser = { id: uuidv4(), ...req.body };
  users.push(newUser);
  return res.send(newUser);
});

app.listen(process.env.PORT, () =>
  console.log(`User app listening on port ${process.env.PORT}!`),
);
