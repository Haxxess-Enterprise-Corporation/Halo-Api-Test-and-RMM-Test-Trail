import express from 'express';
import bodyParser from 'body-parser';
import route from './routes';
import cors from 'cors';
// import cookieSession from 'cookie-session';
// import keys from './webpack/keys';
// import passport from 'passport';
require('./../src/services/passport');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
// app.use(
// 	cookieSession({
// 		maxAge: 1 * 24 * 60 * 60 * 1000,
// 		keys: [
// 			keys.cookieSecret
// 		]
// 	})
// );
// app.use(passport.initialize());
// app.use(passport.session());

route(app);

export default app;
