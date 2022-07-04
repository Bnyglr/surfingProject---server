const express = require('express');
const app = express();
const PORT = 3001;

const router = require('./routes/index.js');

app.use(express.json());    
app.use(require('cors')());

app.use('/api',router);

app.listen(PORT, ()=>console.log(`server is runnig => ${PORT}`));

require('./DL/db.js').connect();
