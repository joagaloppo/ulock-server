const { User } = require('../database');
const endpointResponse = require('../utils/endpointResponse.js');
const bcrypt = require('../utils/bcrypt.js');

const editPassword = async (req, res, next) => {
	const { oldPassword, newPassword } = req.body;
	const user = await User.findOne({ where: { id: req.user.id } });
	const passwordIsCorrect = await bcrypt.compare(oldPassword, user.password);
	if (!passwordIsCorrect) return endpointResponse({ res, code: 400, status: 'error', message: 'Wrong password' });
	const hashedPassword = await bcrypt.hash(newPassword);
	user.password = hashedPassword;
	await user.save();
	next();
};

module.exports = editPassword;
