import Express from 'express';
import cors from 'cors';

import http from 'http';

const IS_DEV = process.env.NODE_ENV === 'developement';
const app = Express();

app.use(cors());

app.all('/', (req: Express.Request, res: Express.Response) => {
	res.send(`OK. Your requested [${req.method}]. And you are [${req.header('user-agent')}].\n`);
});

if ( IS_DEV ) {
	const httpServer = http.createServer(app);
	httpServer.listen(IS_DEV ? 3080 : 80, () => {
		console.log('Listen HTTP Server', IS_DEV ? 3080 : 80);
	});
}
