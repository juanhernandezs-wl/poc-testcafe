import { t, Selector } from "testcafe";

/**
 * TODO(juan.hernandez): Add class description
 */

class loginPage {
  constructor() {
    this.inputUserName = Selector("input#UsuarioSup");
    this.inputPassword = Selector("input#PasswordSup");
    this.btnLogin = Selector(".login-btn > button");

    // error messages
    this.errInvalidEmail = Selector("#UsuarioSup-error");
    this.errInvalidPassword = Selector("span.field-validation-error[data-valmsg-for='generalError']");
  }

  loginFlow = async (user, pass) => {
    await t.typeText(this.inputUserName, user, { paste: true });
    await t.typeText(this.inputPassword, pass, { paste: true });
    await t.pressKey("enter");
  };
}

export default new loginPage();
