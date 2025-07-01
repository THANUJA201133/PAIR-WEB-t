const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Public folder serve කරලා
app.use(express.static('public'));

// Pair Code එක return කරන route
app.get('/pair-code', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'pair-code.txt');
  if (fs.existsSync(filePath)) {
    const code = fs.readFileSync(filePath, 'utf8');
    res.send({ code });
  } else {
    res.send({ code: 'Not available yet.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
