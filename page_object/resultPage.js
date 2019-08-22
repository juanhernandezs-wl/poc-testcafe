
import { t, Selector } from 'testcafe'

/**
 * TODO(juan.hernandez): Add class description
 */

class resultPage {
    constructor() {
     this.btnAddArticle = Selector('div.add2CartTrigger.botonAgregarProductoCarrito')
    }
  
}
export default new resultPage()
