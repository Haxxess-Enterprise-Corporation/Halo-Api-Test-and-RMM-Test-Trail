'use strict';
module.exports = (sequelize, DataTypes) => {
	const Recipient = sequelize.define(
		'Recipient',
		{
			email: DataTypes.STRING,
			responded: DataTypes.BOOLEAN
		},
		{}
	);
	Recipient.associate = function (models){
		// associations can be defined here
		Recipient.belongsTo(models.Survey, {
			foreignKey: 'surveyId',
			onDELETE: 'CASADE'
		});
	};
	return Recipient;
};
