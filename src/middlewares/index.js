const loginFields = require('../middlewares/loginFields');
const registerFields = require('../middlewares/registerFields');
const editFields = require('../middlewares/editFields');
const editPassword = require('../middlewares/editPassword');
const deleteUser = require('../middlewares/deleteUser');
const authenticateToken = require('../middlewares/authenticateToken');

module.exports = {
	loginFields,
	registerFields,
	editFields,
	editPassword,
	deleteUser,
	authenticateToken,
};
