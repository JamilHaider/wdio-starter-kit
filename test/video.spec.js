describe('Video Page', function () {
  it('should load video correctly', function () {
    browser.url('news/2018-03-02/vladimir-putin-nuclear-comments-spark-fears-of-arms-race/9504866');
    browser.isVisible('div.inline-content.video.full.video');
    expect(browser.isExisting('div.custom-placeholder.jwplayer-video.visible')).to.be.true;
  });
});
