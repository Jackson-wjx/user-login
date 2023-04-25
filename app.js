const express = require('express');  
const mysql = require('mysql');  
const bodyParser = require('body-parser');  
const bcrypt = require('bcryptjs');  
const jwt = require('jsonwebtoken');  
  
const app = express();  
app.use(bodyParser.json());  
  
const connection = mysql.createConnection({  
  host: 'localhost',  
  user: 'root',  
  password: 'thikdaxc8834',  
  database: 'mydb'  
});  
  
connection.connect(err => {  
  if (err) throw err;  
  console.log('Connected to the MySQL server.');  
});  
  
app.post('/register', async (req, res) => {  
  const { username, email, password } = req.body;  
  console.log(username, email, password)
  const salt = await bcrypt.genSalt(10);  
  console.log('salt', salt);
  const hashedPassword = await bcrypt.hash(password, salt);  
  console.log('hashedPassword', hashedPassword);
  
  const user = { username, email, password: hashedPassword };  
  
  connection.query('INSERT INTO users SET ?', user, (err, result) => {  
    if (err) {  
      console.error(err);  
      res.status(500).send('Server error');  
    } else {  
      res.status(201).send('User created');  
    }  
  });  
});  
  
app.post('/login', (req, res) => {  
  const { username, password } = req.body;  
  
  connection.query('SELECT * FROM users WHERE username = ?', [username], async (err, result) => {  
    if (err) {  
      console.error(err);  
      res.status(500).send('Server error');  
    } else {  
      if (result.length > 0) {  
        const user = result[0];  
        const isMatch = await bcrypt.compare(password, user.password);  
  
        if (isMatch) {  
          const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });  
          res.status(200).json({ token });  
        } else {  
          res.status(401).send('Incorrect password');  
        }  
      } else {  
        res.status(404).send('User not found');  
      }  
    }  
  });  
});  
  
app.listen(3000, () => {  
  console.log('Server is running on port 3000');  
});  
