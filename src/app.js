const express = require('express');
const cors    = require('cors');
const db      = require('./config/database');
const Image   = require('./models/Image');
const routes  = require('./routes/images');

const app = express();
app.use(cors(), express.json(), express.static('public'));
app.use('/api/images', routes);

db.authenticate()
  .then(() => db.sync())  // sincroniza tabelas
  .then(() => console.log('👍 DB ok!'))
  .catch(err => console.error('DB error:', err));

app.listen(3000, () => console.log('Server em http://localhost:3000'));
