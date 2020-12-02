import Express from 'express';
import cors from 'cors';
import axios, { Method, AxiosResponse } from 'axios';

import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';

const IS_DEV = process.env.NODE_ENV === 'developement';
const HEADER_PREFIX = 'cors-proxy-';
const app = Express();

app.use(cors());

const CORSProxyHeader = (req: Express.Request, key: string) => {
	const val = req.headers[HEADER_PREFIX + key];
	if ( val ) {
		delete req.headers[HEADER_PREFIX + key];
	}
	return val;
};

app.all('/', async (req: Express.Request, res: Express.Response) => {
	const dstURL: string = CORSProxyHeader(req, 'url') as string;
	if ( dstURL ) {
		try {
			const reqConfig = {
				url: dstURL,
				method: req.method as Method,
				params: req.params,
				data: req.body,
			};
			const axiosRes = await axios(reqConfig);
			const axiosResJSON = {
				status: axiosRes.status,
				statusText: axiosRes.statusText,
				data: axiosRes.data,
			};
			res.send(JSON.stringify(axiosResJSON, null, '\t'));
		} catch(err) {
			if ( typeof err.toJSON === 'function' ) {
				console.error(err.toJSON());
			} else {
				console.error(err);
			}
		}
	} else {
		res.status(404).end();
	}
});

const options = {
	key: fs.readFileSync(path.join(process.env.CERT_DIR as string, 'private.pem'), {encoding:'utf8'}),
	cert: fs.readFileSync(path.join(process.env.CERT_DIR as string, 'server.crt'), {encoding:'utf8'})
};
if ( IS_DEV ) {
	const httpServer = http.createServer(app);
	httpServer.listen(3080, () => {
		console.log('Listen HTTP Server', 3080);
	});

	const httpsServer = https.createServer(options, app);
	httpsServer.listen(3443, () => {
		console.log('Listen HTTP/S Server', 3443);
	});
} else {
	const httpsServer = https.createServer(options, app);
	httpsServer.listen(443, () => {
		console.log('Listen HTTP/S Server', 443);
	});
}
