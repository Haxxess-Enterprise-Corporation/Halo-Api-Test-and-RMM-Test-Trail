// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const keys = require('./../webpack/keys');
// const models = require('./../models');
// const { User } = models;

// //serialize user
// passport.serializeUser((user, done) => {
// 	done(null, user.id);
// });

// //deserialize user
// passport.deserializeUser((id, done) => {
// 	User.findOne({
// 		where: { id }
// 	}).then((user) => {
// 		done(null, user);
// 	});
// });

// passport.use(
// 	new GoogleStrategy(
// 		{
// 			clientID: keys.GoogleClientID,
// 			clientSecret: keys.GoogleClientSECRET,
// 			callbackURL: '/auth/google/callback',
// 			proxy: true
// 		},
// 		async (accessToken, refreshToken, profile, done) => {
// 			const existingUser = await User.findOne({
// 				where: { googleId: profile.id }
// 			});

// 			if (existingUser) {
// 				return done(null, existingUser);
// 			}

// 			const user = await User.create({
// 				googleId: profile.id
// 			});
// 			done(null, user);
// 		}
// 	)
// );
