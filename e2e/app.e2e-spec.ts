import { Tryangular4Page } from './app.po';

describe('tryangular4 App', () => {
  let page: Tryangular4Page;

  beforeEach(() => {
    page = new Tryangular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
