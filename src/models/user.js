'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			googleId: DataTypes.STRING,
			credits: DataTypes.NUMBER
		},
		{}
	);
	User.associate = function (models){
		// associations can be defined here
		User.hasMany(models.Survey, {
			foreignKey: 'userId',
			as: 'surveys'
		});
	};
	return User;
};
