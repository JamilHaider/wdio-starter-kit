describe('Just In Page', function () {
  beforeEach(function () {
    browser.url('news/justin');
  });

  it('should load content per article correctly', function () {
    $$('#main_content ul.article-index li').forEach(function (article) {
      var heading = article.getText('h3');

      var time = article.$$('.published span');

      var text = article.$$('p').filter(el => {
        return !el.getAttribute('class');
      })[0].getText();

      expect(heading, 'Article heading').to.be.a('string');

      expect(time, 'Article time').to.be.a('array');

      expect(time.length > 0, 'Article time posted/updated').to.be.true;

      expect(text, 'Article text').to.be.a('string');
    });
  });
});
