const { DataTypes } = require('sequelize');
const slugGenerator = require('../../utils/slugGenerator');

module.exports = (sequelize) => {
	sequelize.define('Link', {
		slug: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: () => slugGenerator(),
		},
		stepLink: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		targetLink: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		views: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
	});
};
