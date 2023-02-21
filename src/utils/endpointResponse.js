const endpointResponse = ({ res, code, status, data, message }) => {
	res.status(code).json({
		status,
		data,
		message,
	});
};

module.exports = endpointResponse;
