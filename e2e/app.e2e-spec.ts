import { AngMessPage } from './app.po';

describe('ang-mess App', () => {
  let page: AngMessPage;

  beforeEach(() => {
    page = new AngMessPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
