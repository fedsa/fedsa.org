const puppeteer = require("puppeteer-core");
const chromium = require("chrome-aws-lambda");

exports.handler = async function () {
  const browser = await puppeteer.launch({
    executablePath: await chromium.executablePath,
  });

  const page = await browser.newPage();
  await page.goto("https://www.meetup.com/fedsa-community/events/");

  const resultsSelector = ".list-item";
  await page.waitForSelector(resultsSelector);

  const response = await page.evaluate((resultsSelector) => {
    return [...document.querySelectorAll(resultsSelector)].map((node) => ({
      title: node.querySelector(".eventCard--link").innerText,
      image: node
        .querySelector('[aria-label="Event photo"]')
        .style.backgroundImage.toString()
        .replace(/^url\("/i, "")
        .replace(/\"\)$/i, ""),
    }));
  }, resultsSelector);

  await browser.close();

  return {
    statusCode: 200,
    body: JSON.stringify({ response }),
  };
};
