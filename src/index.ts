import { launch } from "puppeteer";

async function main() {
	const browser = await launch({
		slowMo: 100,
		args: ["--window-size=900,900"],
		headless: false,
	});

	const [page] = await browser.pages();

	await page?.goto("https://google.com");

	console.log(await page?.title());

	await browser.close();
}

main();
