import express from 'express';
// import passport from 'passport';
import { sendErrorResponse, sendSuccessResponse } from './../util/sendResponse';
const router = express.Router();

// router.get(
// 	'/auth/google',
// 	passport.authenticate('google', {
// 		scope: [
// 			'profile',
// 			'email'
// 		]
// 	})
// );

// router.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
// 	res.send({ message: 'Log In successfull' });
// });

router.get('/api/current/user', (req, res) => {
	res.send(req.user);
});

router.get('/api/logout', (req, res) => {
	req.logout();
	res.send(req.user);
});

export default router;
