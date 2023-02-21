const { Link } = require('../database');
const endpointResponse = require('../utils/endpointResponse');

const getUserLinks = async (req, res) => {
	const links = await Link.findAll({ where: { userId: req.user.id } });
	if (!links) return endpointResponse({ res, code: 201, status: 'success', message: 'No links found' });
	return endpointResponse({ res, code: 200, status: 'success', data: { links } });
};

const createUserLink = async (req, res) => {
	const { stepLink, targetLink } = req.body;
	if (!stepLink || !targetLink)
		return endpointResponse({ res, code: 400, status: 'error', message: 'Required data is missing' });
	const link = await Link.create({ stepLink, targetLink, userId: req.user.id });
	return endpointResponse({ res, code: 201, status: 'success', data: { link } });
};

const createGuestLink = async (req, res) => {
	const { stepLink, targetLink } = req.body;
	if (!stepLink || !targetLink)
		return endpointResponse({ res, code: 400, status: 'error', message: 'Required data is missing' });
	const link = await Link.create({ stepLink, targetLink });
	return endpointResponse({ res, code: 201, status: 'success', data: { link } });
};

const editLink = async (req, res) => {
	const { stepLink, targetLink } = req.body;
	const slug = req.params.slug;
	const link = await Link.findOne({ where: { slug } });
	if (!link) return endpointResponse({ res, code: 404, status: 'error', message: 'No link found' });
	if (link.userId !== req.user.id)
		return endpointResponse({ res, code: 401, status: 'error', message: 'Unauthorized' });
	link.stepLink = stepLink;
	link.targetLink = targetLink;
	await link.save();

	return endpointResponse({ res, code: 200, status: 'success', data: { link } });
};

const deleteLink = async (req, res) => {
	const slug = req.params.slug;
	const link = await Link.findOne({ where: { slug } });
	if (!link) return endpointResponse({ res, code: 404, status: 'error', message: 'No link found' });
	if (link.userId !== req.user.id)
		return endpointResponse({ res, code: 401, status: 'error', message: 'Unauthorized' });
	await link.destroy();
	return endpointResponse({ res, code: 200, status: 'success', message: 'Link deleted' });
};

const getLink = async (req, res) => {
	const slug = req.params.slug;
	if (!slug) return endpointResponse({ res, code: 400, status: 'error', message: 'Required data is missing' });
	const link = await Link.findOne({ where: { slug } });
	if (!link) return endpointResponse({ res, code: 201, status: 'success', message: 'No link found' });
	link.views += 1;
	await link.save();
	return endpointResponse({
		res,
		code: 200,
		status: 'success',
		data: { link: { stepLink: link.stepLink, targetLink: link.targetLink } },
	});
};

module.exports = { getUserLinks, createUserLink, createGuestLink, editLink, deleteLink, getLink };
