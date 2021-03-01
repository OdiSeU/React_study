const express = require('express');
const path = require('path');
const router = require('./router');
const app = express();
const PORT = process.env.PORT || 4000;

// for link react client app
const clientApp = path.join(__dirname, '../front/build');
app.use(express.static(clientApp));

// for read request.body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// for link router
app.use('/', router);

// start server
app.listen(PORT, () => {
    console.log(`server on : http://localhost:${PORT}`);
});