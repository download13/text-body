var rawbody = require('raw-body');


// Call to create middleware
module.exports = function(options) {
	options = options || {};

	return function(req, res, next) {
		req.body = '';

		if(req.headers['content-type'] === 'text/plain') {
			rawbody(req, {
				length: req.headers['content-length'],
				limit: options.limit,
				encoding: 'utf8'
			}, function(err, body) {
				if(err) {
					// Close the connection and drop it on the floor
					req.destroy();
				} else {
					req.body = body;
					next();
				}
			});
		} else {
			next();
		}
	}
}
