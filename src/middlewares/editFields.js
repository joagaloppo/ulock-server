const { User } = require('../database');

const editFields = async (req, res, next) => {
	const { username, email } = req.body;
	const user = await User.findOne({ where: { id: req.user.id } });
	if (!user) return res.status(404).json({ status: 'error', message: 'No user found' });
	if (username) user.username = username;
	if (email) user.email = email;
	await user.save();
	req.user = { id: user.id, username: user.username, email: user.email };
	next();
};

module.exports = editFields;
