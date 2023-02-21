require('dotenv').config();
const cors = require('cors');
const endpointResponse = require('./utils/endpointResponse.js');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const routerIndex = require('./routes/index');
app.use(routerIndex);

app.use((_, res) => {
	return endpointResponse({ res, code: 404, status: 'error', message: 'Specified URL was not found' });
});

module.exports = app;
