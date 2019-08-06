import { Selector } from 'testcafe'
fixture `Getting started with TestCafe`
.page`https://google.com`
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
    await t.typeText(".A8SBwf","just testing");
    await t.wait(2000)
} )