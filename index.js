const { chromium } = require("playwright");

let player_id = "GMshah";

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.chess.com/member/${player_id}`);
    let rating = await page.innerText("body > div.base-layout > div.base-container > main > div.layout-column-two > div:nth-child(2) > div.stat-section-expanded.stat-section-stats-section > button > div > div.stat-section-user-rating > span");
    console.log(rating);
    await browser.close();
})();