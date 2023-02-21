// const jwt = require('jsonwebtoken');
const jwt = require('../utils/jwt');
const endpointResponse = require('../utils/endpointResponse.js');

const authenticateToken = async (req, res, next) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (!token) return endpointResponse({ res, code: 401, status: 'error', msg: 'No token provided' });
	try {
		const decoded = await jwt.verify(token);
		req.user = { id: decoded.id, username: decoded.username, email: decoded.email };
		next();
	} catch (err) {
		return endpointResponse({ res, code: 403, status: 'error', msg: 'Invalid token' });
	}
};

module.exports = authenticateToken;
