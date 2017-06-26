import { MathsQuestionsPage } from './app.po';

describe('maths-questions App', () => {
  let page: MathsQuestionsPage;

  beforeEach(() => {
    page = new MathsQuestionsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
