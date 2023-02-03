// const axios = require("axios");
// const cheerio = require("cheerio");
// const express = require("express");
// const app = express();

// const PORT = process.env.PORT || 5000;

// app.get("/webtoon", async (req, res) => {
//   try {
//     const result = await axios.get("https://comic.naver.com/webtoon/weekday");
//     const $ = cheerio.load(result.data);
//     const webtoonData = {};

//     $("div.thumb").each(function (i, elem) {
//       const link = $(this).find("a");
//       const src = $(this).find("img").attr("src");
//       const title = $(this).find("img").attr("title");
//       const weekday = link.attr("href").split("=")[2];

//       if (!webtoonData[weekday]) {
//         webtoonData[weekday] = [];
//       }

//       webtoonData[weekday].push({
//         title: title,
//         src: src,
//       });
//     });

//     res.json({
//       webtoon: webtoonData,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error occurred while crawling data");
//   }
// });

// app.listen(PORT, () => {
//   console.log(`API Server started on port ${PORT}`);
// });

// const express = require("express");
// const axios = require("axios");
// const cheerio = require("cheerio");

// const app = express();
// const port = 5000;

// app.get("/naverwebtoon", (req, res) => {
//   axios
//     .get("https://comic.naver.com/webtoon/weekday")
//     .then((response) => {
//       let webtoons = {};
//       const $ = cheerio.load(response.data);
//       $(".thumb").each((index, element) => {
//         let title = $(element).find("img").attr("title");
//         let src = $(element).find("img").attr("src");
//         let weekday = $(element).find("a").attr("href").split("weekday=")[1];
//         let link = `https://comic.naver.com${$(element)
//           .find("a")
//           .attr("href")}`;

//         if (!webtoons.hasOwnProperty(weekday)) {
//           webtoons[weekday] = [];
//         }
//         webtoons[weekday].push({ title, src, link });
//       });
//       res.send({ webtoons });
//     })
//     .catch((error) => {
//       console.log(error);
//       res.sendStatus(500);
//     });
// });

// app.listen(port, () => {
//   console.log(`Webtoon API listening at http://localhost:${port}/naverwebtoon`);
// });

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

app.get("/naverwebtoon", (req, res) => {
  axios
    .get("https://comic.naver.com/webtoon/weekday")
    .then((response) => {
      let webtoons = {};
      const $ = cheerio.load(response.data);
      $(".thumb").each((index, element) => {
        let title = $(element).find("img").attr("title");
        let src = $(element).find("img").attr("src");
        let weekday = $(element).find("a").attr("href").split("weekday=")[1];
        let link = `https://comic.naver.com${$(element)
          .find("a")
          .attr("href")}`;

        if (!webtoons.hasOwnProperty(weekday)) {
          webtoons[weekday] = [];
        }
        webtoons[weekday].push({ title, src, link });
      });
      res.send({ webtoons });
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`start on`);
});
