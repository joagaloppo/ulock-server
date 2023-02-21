const jsonWebToken = require('jsonwebtoken');
const endpointResponse = require('./endpointResponse.js');

const jwt = {};
jwt.sign = (object) => jsonWebToken.sign(object, process.env.SECRET, { expiresIn: '30d' });

jwt.verify = (token) => {
	return new Promise((resolve, reject) => {
		jsonWebToken.verify(token, process.env.SECRET, (err, decoded) => {
			if (err) return reject(err);
			return resolve(decoded);
		});
	});
};

module.exports = jwt;
