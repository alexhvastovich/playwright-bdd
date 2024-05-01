import {test as base} from 'playwright-bdd'
import * as Pages from '../fixtures/pages'

const {EcomLoginPage, EcomChangePage} = Pages;

const createTestFunction = (pageClass) => async({page}, use) => {
    await use(new pageClass(page))
}

export const test = base.extend({
    ecomLoginPage: createTestFunction(EcomLoginPage),
    ecomChangePage: createTestFunction(EcomChangePage)
})