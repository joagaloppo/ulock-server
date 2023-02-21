const jwt = require('../utils/jwt.js');
const endpointResponse = require('../utils/endpointResponse.js');

const login = async (req, res) => {
	const accessToken = jwt.sign(req.user);
	return endpointResponse({
		res,
		code: 200,
		status: 'success',
		data: { ...req.user, token: accessToken },
	});
};

const register = async (req, res) => {
	const accessToken = jwt.sign(req.user);
	return endpointResponse({
		res,
		code: 201,
		status: 'success',
		data: { ...req.user, token: accessToken },
	});
};

const edit = async (req, res) => {
	return endpointResponse({ res, code: 200, status: 'success', data: { user: req.user } });
};

const deleteU = async (req, res) => {
	return endpointResponse({ res, code: 200, status: 'success', message: 'User deleted' });
};

const getUser = async (req, res) => {
	return endpointResponse({ res, code: 200, status: 'success', data: { user: req.user } });
};

module.exports = { login, register, getUser, deleteU, edit };
