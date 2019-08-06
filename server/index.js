const express = require('express');
const app = express();

require('dotenv').config();
require('./middlewares')(app);
require('./src/routes')(app);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
