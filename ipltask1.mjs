import cheerio from 'cheerio';
import axios from 'axios';
import chalk from 'chalk';

console.log("just to check ");

axios.get('https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary')
  .then(response => {
    handleHtml(response.data);
  })
  .catch(error => {
    console.log("error: ", error);
  });

function handleHtml(html) {
  let $ = cheerio.load(html);
  let elemsArr = $(".d-flex.match-comment-padder.align-items-center .match-comment-long-text");

  // for (let i = 0; i < contentArr.length; i++) {
  //   let data = setTool(contentArr[i]);
  //   console.log("data: ", data.text());
  // }
  let text = $(elemsArr[0]).text();
  let  htmldata = $(elemsArr[0]).html();

  console.log("text data :" , text);
  console.log("html data :" , htmldata);

}
