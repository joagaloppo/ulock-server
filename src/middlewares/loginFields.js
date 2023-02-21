const { User } = require('../database');
const bcrypt = require('../utils/bcrypt.js');
const endpointResponse = require('../utils/endpointResponse.js');

const loginFields = async (req, res, next) => {
	const { username, password } = req.body;
	if (!username) return endpointResponse({ res, code: 400, status: 'error', message: 'Username is missing' });
	if (!password) return endpointResponse({ res, code: 400, status: 'error', message: 'Password is missing' });

	let user = (await username.includes('@'))
		? await User.findOne({ where: { email: username } })
		: await User.findOne({ where: { username } });
	if (!user)
		return endpointResponse({
			res,
			code: 400,
			status: 'error',
			message: `Wrong ${username.includes('@') ? 'email' : 'username'}`,
		});

	const passwordIsCorrect = await bcrypt.compare(password, user.password);
	if (!passwordIsCorrect) return endpointResponse({ res, code: 400, status: 'error', message: 'Wrong password' });

	req.user = { id: user.id, username: user.username, email: user.email };
	next();
};

module.exports = loginFields;
