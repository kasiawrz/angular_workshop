import { browser, element, by } from 'protractor';

export class StacjaItPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('si-root h1')).getText();
  }
}
