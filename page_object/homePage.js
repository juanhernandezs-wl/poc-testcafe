import { t, Selector } from "testcafe";
import loginPage from "../page_object/loginPage";

/**
 * TODO(juan.hernandez): Add class description
 */

class homePage {
  constructor() {
    // Buttons
    this.btnMainMenu = Selector(".headerLogoImage, #imageLogo");
    this.btnShoppingCart = Selector("div#cartBox");
    this.btnUserName = Selector("span#headerUserNameText");
    this.btnLogin = Selector(
      '.userAccountOptionsDesktopSemibold > a[href="/login"]'
    );
    this.btnCart = Selector("#cartBoxIconShoppingCart");
    this.btnLogout = Selector(".userAccountOptionsDesktopLogOf a");

    // Inputs
    this.inputSearchBar = Selector("input#serachTextV3");

    // Images
    this.imgLogo = Selector("div#imageLogo");

    // Labels
    this.lblSubtotal = Selector("span#subtotalCompraHeader");
  }

  async clickLogin() {
    await t
    .click(this.btnUserName)
    .click(this.btnLogin)
    // return new loginPage();
  }

  async clickLogout() {
    await t
    .click(this.btnUserName)
    .click(this.btnLogout)
  }

  async searchArticle(articleName) {
    await t
          .typeText(this.inputSearchBar, articleName, { paste: true })
          .pressKey("enter")
  }
}

export default new homePage();
