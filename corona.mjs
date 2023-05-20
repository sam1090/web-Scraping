import cheerio from 'cheerio';
import axios from 'axios';
import chalk from 'chalk';

console.log("just to check ");

axios.get('https://www.worldometers.info/coronavirus/')
  .then(response => {
    handleHtml(response.data);
  })
  .catch(error => {
    console.log("error: ", error);
  });

function handleHtml(html) {
  let setTool = cheerio.load(html);
  let contentArr = setTool("#maincounter-wrap span");

  // for (let i = 0; i < contentArr.length; i++) {
  //   let data = setTool(contentArr[i]);
  //   console.log("data: ", data.text());
  // }

const total = setTool(contentArr[0]).text();
const deaths = setTool(contentArr[1]).text();
const recovered = setTool(contentArr[2]).text();

console.log(chalk.yellow("total cases : ", total));
console.log(chalk.red("deaths : ", deaths));
console.log(chalk.green("recovered: ", recovered));
}
