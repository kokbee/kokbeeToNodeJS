const axios = require("axios");
const cheerio = require("cheerio");


// axios, cherrio는 nodejs의 초기 개발시 자주 사용했던 모듈들이다.
axios.get("http://example.com").then((resp) => {
    const htmlString = resp.data;
    const $ = cheerio.load(htmlString);
    const href = $('a').attr('href');
    console.log(href);

//    console.log(Object.keys(resp));
//    console.log(resp.data);
});