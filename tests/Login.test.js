import{ t, Selector } from 'testcafe'
import homePage from '../page_object/homePage'
import resultPage from '../page_object/resultPage'
import loginPage from '../page_object/loginPage'

fixture `Login tests`
  .page `https://www.superama.com.mx/`
  .afterEach(async t => {
    homePage.clickLogout();
  })

test.skip('Login - Valid credentials - enter', async t => {
  await homePage.clickLogin();
  await loginPage.loginFlow("juanfromqa@gmail.com", "Test1234!");
})

test.skip('Login [TTF] - Malformed email', async t => {
  await homePage.clickLogin();
  await loginPage.loginFlow("Nonexistent", "Test1234!");
  
  await t
  .expect(loginPage.errInvalidEmail().innerText)
  .contains("*Formato de correo electrónico no válido");
})

test('Login [TTF] - Wrong password', async t => {
  await homePage.clickLogin();
  await loginPage.loginFlow("juanfromqa@gmail.com", "12345");
  
  await t
  .expect(loginPage.errInvalidPassword.innerText)
  .contains("Correo o contraseña incorrectos.");
})
