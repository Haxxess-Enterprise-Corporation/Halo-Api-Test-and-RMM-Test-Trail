import express from 'express';
import axios from 'axios';
import { token } from 'morgan';
// import { sendErrorResponse, sendSuccessResponse } from './../util/sendResponse';
const router = express.Router();
const clientId = '564583ea-2a5e-40f2-9608-f67609004d8f';
const clientSecret = '72f19ceb-197a-4dc1-bcf6-299e62df33e5-0a80377e-0619-4e20-8805-c245a0e85e78';
const authUrl = 'https://halo.haxxess.com';
const resourceUrl = 'https://halo.haxxess.com/api';
let accessToken = "CfDJ8E9nJel5K3NKiptIAMwHBgZTELjqYxbwk0x_h6R370Af3lf4BpztwvDbEG-UiFXjhYG7XzHkcma1HRoao7fn1LlEMYpAYkMotOrINk-gDSGIfs1FaQc_6-94kc5ofvWVJFdnVeFckipw9m7H4DxxGvhoqUAD33nCgYzSxO3a3RUNRXH0RlEzTaqJA7CpOYuEvoSUY5Ondz_5erHb51sIpKkzlurkz8FOn7gRePQqAUhsl23EhM7CnLGA1cOyQgpC1ESWCpnDl_dJzUWDWXRDgdahzCii6p2yNfdXrOjm8cYA20e3U-_kmG3_uIq0b19o7AUTT6G2B5IujfuD9oi1PX5wa7xg8ut6PnyFbIeSkozPV1nHS1PcRjhmI4zyhOONOxAF96XbMw1IUcme1KOrO8gFTdcnExY_y5qMnpnKGpMusDwCkg9QQAoeq0rSPgMLzjRwwr2tECHwcP9m1bLleOQqT63E4oPeugp6wQ6ObecO7ZYpIZSN14p6USToCJ7VokbzJZRAu3lWFuCFRp5jHEs17t_3XOC62gDMgWkBmOGHJSURIps8CUBIxaVBibZXnvg9FJXzaT3-9ofweDSIcSuxyOp8awYlBF6wzUoM1PbRCi532RKCkQitHoWaqf_2ytE4ws0mNfa13LwO5DJEoHRTMkDdEcSa6d4G9br6WAHk5C-sTCqcnovDjB0ESvbxdMvW7meXNAZCj66KYROgD-fPVJfDZzv0OG8q6ViVVaXEDrlF7Mzn8dMUOjm6XRbx2GD88tpvdj3Z6r-DSocijDAkCpfTxNM-zmwEG6pa9tD9BJSEbHwCqiYzGwizt9TtFNrSx00TnpGTMcZDUH_ogcWmF6OEo9ZVcwceXEIIJcRcWFMl96Qp78NWh4x98LuOu9IzV7_wWTUwmgoCu3LyN-HRILgLqtIIXyeWJV1cUp06W-I63byZpvvFb7KoC7iIm7LFc3RuvD1VnfHSQ7seg5e0xLEhJgcZS5fcoG1IW6m1T4H6ZRi2XnltTI4CC-_iFtiJ58k6QiLqQWxx4BtyX5QsBkoI7tbymsH3mJGqMctOABD2mFEwKYX-YaWbc5Dwjg_pkAVffZPFaJOB-hc2bOTn_LGaHH72TwgP689V747iUWvl27RcTlRrj-7SZXHASv6nCniQndS1ptz7pn02o53H2OO-SNPO6JCL_astQt6IhU6GowqoXyag4DzcBt2yHg95mwatLKMg_z1YJM6vaxtSxJ1hd9FHehStlFf_Uhorm5ODMJE59MjmUNlfrckd2dAmnUXuhdQQzJkJv6nJEbF0U51gOHIDnvY0KIvcxXst6vEkxLLzbQtSFk4yMrCOdyzj4Xi73g4BdOH938w1B4U";

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

router.get('/api/getToken', async (req, res) => {
	try {
        const response = await axios.post(`${authUrl}/auth/token?tenant=haxxess`, {
			headers: {
                "Content-Type": "application/x-www-form-urlencoded",
				"Accept": "*",
				"Connection": "keep-alive"
            },
			form: {
				grant_type: 'client_credentials',
				client_id: clientId,
				client_secret: clientSecret,
				scope: 'all'
			}
        });
		console.log(response);
        const tokenDetails = response.data;
        console.log('Access Token:', tokenDetails.accessToken);
        // Now you can use this token for subsequent API calls
		accessToken = tokenDetails.accessToken;
		res.send(tokenDetails);
    } catch (error) {
        console.error('Error fetching token:', error.message);
		res.send(error)
    }
});

router.get('/api/rmmtoken', async (req, res) => {
	try {
        console.log('request:', JSON.stringify(req));
        console.log('response:', JSON.stringify(res));
		res.send(res);
    } catch (error) {
        console.error('Error fetching token:', error.message);
		res.send(error)
    }
});

router.get('/api/getTickets', async (req, res) => {
	try {
        const response = await axios.get(`${resourceUrl}/tickets`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const tickets = response.data; // Process the ticket data as needed
        // console.log('Tickets:', tickets);
		res.send(tickets);
    } catch (error) {
        console.error('Error fetching tickets:', error.message);
		res.send(error)
    }
});

export default router;
