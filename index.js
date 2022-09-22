const { chromium } = require("playwright");

let player_id = "pranavjain001";

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.chess.com/member/${player_id}`);
    let rating = await page.innerText("#view-profile > div.v5-section.v5-space-bottom.profile-header-container > div > div.profile-header-info > div.profile-header-details > div > div.profile-card-info > div.profile-card-user-info > div:nth-child(3) > div");
    console.log(rating);
    await browser.close();
})();