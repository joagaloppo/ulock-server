const express = require('express');
const router = express.Router();

const {
	loginFields,
	registerFields,
	editFields,
	editPassword,
	deleteUser,
	authenticateToken,
} = require('../middlewares');

const { login, register, edit, deleteU, getUser } = require('../controllers/auth');

router.post('/login', loginFields, login);
router.post('/register', registerFields, register);
router.put('/edit/general', authenticateToken, editFields, edit);
router.put('/edit/password', authenticateToken, editPassword, edit);
router.delete('/delete', authenticateToken, deleteUser, deleteU);
router.get('/', authenticateToken, getUser);

module.exports = router;
