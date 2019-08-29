import{ t, Selector } from 'testcafe'
import homePage from '../page_object/homePage'
import resultPage from '../page_object/resultPage'
//require
fixture `Search articles tests`
  .page(`https://www.superama.com.mx/`)

test('Search a valid product', async t => {
    await homePage.searchArticle("shampoo")
    await t.expect(await resultPage.btnAddArticle.exists).ok();  
    await t.expect(await homePage.btnCart.exists).ok();


    




})

