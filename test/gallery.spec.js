describe('Image Gallery Page', function () {
  it('should load Images correctly', function () {
    browser.url('news/2017-02-10/abc-open-pic-of-the-week/8256256');

    expect(browser.isExisting('ul.imageGallery.lightSlider.lsGrab.lSSlide')).to.be.true;

    var images = $$('li.lslide.loaded');

    expect(images.length > 0, 'no image in gallery loaded').to.be.true;
  });
});
