const { User } = require('../database');

const deleteUser = async (req, res, next) => {
	const user = await User.findOne({ where: { id: req.user.id } });
	if (!user) return res.status(404).json({ status: 'error', message: 'No user found' });
	await user.destroy();
	next();
};

module.exports = deleteUser;
