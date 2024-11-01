const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Users list');
});

router.get('/user', (req, res) => {
    const { name, age } = req.query; 
    if (name || age) {
      res.send(`User details - Name: ${name || "N/A"}, Age: ${age || "N/A"}`);
    } else {
      res.send('Users list');
    }
  });
  
module.exports = router;
