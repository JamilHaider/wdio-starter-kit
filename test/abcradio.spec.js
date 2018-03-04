describe('ABC Radio Page', function () {
  beforeEach(function () {
    browser.url('radionational');
  });

  it('should navigate to a program', function () {
    expect(browser.isExisting('li.rn-nav-link.rn-nav-drop')).to.be.true;

    expect(browser.getText('li.rn-nav-link.rn-nav-drop')).to.be.equal('Programs');

    expect(browser.isExisting('ul#rn-programindex')).to.be.true;

    var programs = $$('ul#rn-programindex li');

    var randomIdx = Math.floor(Math.random() * programs.length);

    var randomProgam = programs[randomIdx];

    var href = randomProgam.$('a').getAttribute('href');

    browser.url(href);

    var nurl = browser.getUrl();

    expect(nurl).to.be.equal(href);
  });

  // not sure if last element in an unordered list makes sense
  it('should select last program in program guide', function () {
    var programGuide = $$('div.on-air ul.at-a-glance li');

    var last = programGuide[programGuide.length - 2];

    var href = last.$('a').getAttribute('href');

    browser.url(href);

    var nurl = browser.getUrl();

    expect(nurl).to.be.equal(href);
  });

  it('should search correctly', function () {
    browser.setValue('#search-simple-input-query', 'turnbull');

    browser.click('input#search-simple-input-submit');
    //browser.submitForm('#search-simple-form');

    var result = $$('ul.article-index li');

    expect(result.length > 0).to.be.true;
  });
});
