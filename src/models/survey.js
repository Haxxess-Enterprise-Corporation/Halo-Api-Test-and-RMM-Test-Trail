'use strict';
module.exports = (sequelize, DataTypes) => {
	const Survey = sequelize.define(
		'Survey',
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false
			},
			body: {
				type: DataTypes.STRING,
				allowNull: false
			},
			subject: {
				type: DataTypes.STRING
			},
			yes: {
				type: DataTypes.NUMBER
			},
			no: {
				type: DataTypes.NUMBER
			}
		},
		{}
	);
	Survey.associate = function (models){
		// associations can be defined here
		Survey.hasMany(models.Recipient, {
			foreignKey: 'surveyId',
			as: 'recipients'
		});

		Survey.belongsTo(models.User, {
			foreignKey: 'userId',
			onDelete: 'CASADE'
		});
	};
	return Survey;
};
