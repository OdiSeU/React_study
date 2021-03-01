const BaekjoonCrawl = require("./crawl");
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('hi');
    res.send('index.html');
});

router.post('/crawl', (req, res) => {
    BaekjoonCrawl((data)=>{
        res.send({crawl: data});
    }, {'problem_id': '1001', 'user_id': 'where369'});
});

module.exports = router;
