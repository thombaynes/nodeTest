// You will DEFINITELY need this to stay here
var index = require('../routes/index');

// These are some suggested node libraries you can use to help your testing. Feel free to use something else if you would prefer. Or, use these to google some assistance.
var http_mocks = require('node-mocks-http');
var should = require('should');
// If using http_mocks, this function is helpful.
function buildResponse() {
    return http_mocks.createResponse({eventEmitter: require('events').EventEmitter})
}

describe('Users Router Tests', function() {
//TODO write mocha tests here
    it('Test Name Here', function(done) {

    })
})
