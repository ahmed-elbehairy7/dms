import { Page } from 'puppeteer';

export default async function getFollowers(page : Page, user : string) {
//TODO: go to the followers page of the user
page.goto(`https://x.com/${user}/followers`)
//TODO: document query followers usernames
const list = []
return list;
}