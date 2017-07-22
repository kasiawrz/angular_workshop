import { StacjaItPage } from './app.po';

describe('stacja-it App', () => {
  let page: StacjaItPage;

  beforeEach(() => {
    page = new StacjaItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('si works!');
  });
});
