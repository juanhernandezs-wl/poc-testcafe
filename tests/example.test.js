import { Selector } from 'testcafe';

fixture `Getting started with TestCafe`
.page`https://www.superama.com.mx`

.before(async t => {
    // Test setup goes here
})
.afterEach(async t => {
    // Individual test cleanup goes here
})

.after(async t => {
    // Tests cleanup goes here
})

test ("first test", async t => {

const inputField = Selector("input").withAttribute("placeholder", "¿Qué estás buscando?")


    await t.click(inputField)
    await t.typeText(inputField,"just testing");
    await t.wait(2000);
  //  await t.takeScreenshot();
} )