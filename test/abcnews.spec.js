describe('ABC News Page', function () {
  before(function () {
    browser.url('news');
  });

  it('should load page successfully', function () {
    expect(browser.getUrl()).to.equal(browser.options.baseUrl + '/news/');
  });

  it('should load News Banner', function () {
    browser.isExisting('#header .brand img');
  });

  it('should navigate to "Just In" Page', function () {
    browser.click('li#n-justin');
    expect(browser.getUrl()).to.equal(browser.options.baseUrl + '/news/justin/');
  });
});
