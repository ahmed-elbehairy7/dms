import { Page } from 'puppeteer' 

export default async function dmUser(page : Page, ulist : list, include : list, exclude : list, msg : string ) {
const user = ulist.pop()
page.goto(`https://x.com/${user}`)
const bio = page.$("selector")
const msgButton = page.$(selector)
if (! msgButton || ! bioContain (bio, include) || bioContain (bio, exclude)) {
return await dmUser(page, ulist, include, exclude)
}
msgButton.click()
const msgBox = page.$(selector)
msgBox.textContent = msg
page.evaluate(() => {
document.querySelector(selector).click()
})
}


function bioContain(bio : string, keywords : list) {
for (const keyword of keywords) {
if (bio.include(keyword)) {
return true;
}
}
return false;
}