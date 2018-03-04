describe('ABC Radio Program page of Big Ideas', function () {
  it('should match json key/value pairs', function () {
    var request = require('request');
    var url = 'http://program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json';
    var oracle = require('../ppJj0E8g2R');

    request(url, function (error, response, body) {
      expect(!error).to.be.true;
      expect(response.statusCode).to.be.equal(200);
      expect(response.headers['content-type']).to.be.equal('application/json');
      console.log(response.contentType);
      expect(oracle).to.deep.equal(JSON.parse(body));
    });
  });
});

/*

a)  Let’s assume we want to run the previous tests again (http://program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json)
    but this time against different environments (note these environments do not exist), example:

    Test environment: http://test-program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json
    Staging environment: http://staging-program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json

Answer
======

    We can have multiple conf files for each environment with appropriate baseUrl value[1]

    1. http://webdriver.io/guide/testrunner/organizesuite.html

--------------------------------------------------------------------------------------------------

b)  We have many programs that have a unique id (key/value arid. See attached files or url outputs)
    that can be accessed via public APIs, where the domain and url structure is exactly same save
    for the actual program ID at the end.

    Here are two such programs:

    ‘Afternoons’ program url : http://program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json
    ‘Mornings’ programs url : http://program.abcradio.net.au/api/v1/programs/ppxa2Amj2b.json

    How would you develop your tests so that you can traverse the same tests against many other programs?

Answer
======

    we can check for schema rather then specific key/value pairs.

*/
