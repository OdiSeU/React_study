const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 4000;

// for res.render()
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "public"));
app.engine('html', require('ejs').renderFile);
// for req.body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', router);

router.route('/').get((req, res) => {
    res.render('index.html');
});

router.route('/hey').post((req, res) => {
    console.log(req.body);
    res.send({hey: 123});
});

app.listen(PORT, () => {
    console.log(`server on : http://localhost:${PORT}`);
});