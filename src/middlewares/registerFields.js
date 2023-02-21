const { User } = require('../database');
const bcrypt = require('../utils/bcrypt.js');
const endpointResponse = require('../utils/endpointResponse.js');

const registerFields = async (req, res, next) => {
	const { username, password, email } = req.body;
	if (!username) return endpointResponse({ res, code: 400, status: 'error', message: 'Username is missing' });
	if (!email) return endpointResponse({ res, code: 400, status: 'error', message: 'Email is missing' });
	if (!password) return endpointResponse({ res, code: 400, status: 'error', message: 'Password is missing' });

	const userExists = await User.findOne({ where: { username } });
	if (userExists) return endpointResponse({ res, code: 400, status: 'error', message: 'Username already exists' });

	const emailExists = await User.findOne({ where: { email } });
	if (emailExists) return endpointResponse({ res, code: 400, status: 'error', message: 'Email already exists' });

	const hashedPassword = await bcrypt.hash(password);
	const user = await User.create({ username, email, password: hashedPassword });

	req.user = { id: user.id, username: user.username, email: user.email };
	next();
};

module.exports = registerFields;
