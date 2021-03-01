const axios = require('axios');
const cheerio = require('cheerio');


const BaekjoonCrawl = (callback, options = {}) => {
    options = {
        'problem_id': options['problem_id'] || '',
        'user_id': options['user_id'] || '',
        'language_id': options['language_id'] || '-1',
        'result_id': options['result_id'] || '-1',
    };
    let url = `https://www.acmicpc.net/status?problem_id=${options.problem_id}&user_id=${options.user_id}&language_id=${options.language_id}&result_id=${options.result_id}`;
    let data = [];
    axios.get(url).then(res => {
        const $ = cheerio.load(res.data);
        $('#status-table > tbody > tr').each(function(idx, elem) {
            data.push([]);
            $(this).find('td').each(function(i, e) {
                data[idx].push($(this).text());
            });
        });
        callback(data);
    });
}

module.exports = BaekjoonCrawl;