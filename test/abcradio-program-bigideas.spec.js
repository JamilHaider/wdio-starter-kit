describe('ABC Radio Program page of Big Ideas', function () {
  beforeEach(function () {
    browser.url('radionational/programs/bigideas/iceland-–-a-nation-punching-above-its-weight/9398182');
  });

  it('should have functioning social media share button', function () {
    var mainTab = browser.getCurrentTabId();

    browser.click('div.fb-share-button.fb_iframe_widget');

    var allTabs = browser.getTabIds();

    var popup = allTabs.filter(x => x !== mainTab)[0];

    browser.switchTab(popup);

    var url = browser.getUrl();

    // clean up to make sure popup does not mess with subsequent tests
    browser.close();

    expect(url.substring(0, 25)).to.be.equal('https://www.facebook.com/');
  });

  /*
    browser.click('ul.cs-has-media a[href$=mp3]');
    The above command is blocking and I do not know
    by pass this. For now I am issuing a head request
    and checking if content-type and content-length
    are as expected
  */

  it('should open mp3 file when clicked to download', function () {
    var request = require('request');

    var url = browser.getAttribute('ul.cs-has-media a[href$=mp3]', 'href');

    request({ url: url, method: 'HEAD' }, function (err, res) {
      expect(err, 'Error occurred when checking mp3 link: ' + err).to.be.null;

      expect(res.headers['content-length']).to.be.equal('51778163');

      expect(res.headers['content-type']).to.be.equal('audio/mpeg');
    });
  });

  it('should Open Audio Player when "Listen Now" button is clicked', function () {
    var expectedURL = 'http://radio.abc.net.au/programitem/peWDEzW563?play=true';

    var mainTab = browser.getCurrentTabId();

    browser.click('ul.cs-has-media a[href^="https://radio.abc.net.au"]');

    var allTabs = browser.getTabIds();

    var popup = allTabs.filter(x => x !== mainTab)[0];

    browser.switchTab(popup);

    browser.waitForExist('div#player', 6000);

    var url = browser.getUrl();

    expect(url).to.be.equal(expectedURL);

    browser.waitForExist('div#player.rp__controls.rp__controls--playing');

    // checking for jwplayer is maybe a bit too much
    browser.timeouts('script', 5000);
    var playingState = browser.executeAsync(function (done) {
      setTimeout(function () {
        var jp = jwplayer();

        done(jp.getConfig().state);
      }, 2000);
    });

    expect(playingState.value).to.be.equal('playing');
  });
});
