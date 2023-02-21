const express = require('express');
const router = express.Router();

const { getUserLinks, createUserLink, createGuestLink, editLink, deleteLink, getLink } = require('../controllers/link');

const { authenticateToken } = require('../middlewares');

router.get('/all', authenticateToken, getUserLinks);
router.post('/create/guest', createGuestLink);
router.post('/create/user', authenticateToken, createUserLink);
router.put('/edit/:slug', authenticateToken, editLink);
router.delete('/delete/:slug', authenticateToken, deleteLink);
router.get('/:slug', getLink);

module.exports = router;
