import http from 'http';
import app from './app';
import chalk from 'chalk';
// import keys from './webpack/keys';

//declare the port
const port = process.env.PORT || 7000;

//create the server
const server = http.createServer(app);
server.listen(port, () => {
	console.log(chalk.green.inverse(`Server is running on port ${port}\nVisit http://localhost:${port}`));
});

export { server };
