import { TiendaPage } from './app.po';

describe('tienda App', () => {
  let page: TiendaPage;

  beforeEach(() => {
    page = new TiendaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
