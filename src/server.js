import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import bikes from "../api/bikes";
import users from "../api/users";
import brands from '../api/brands';
import types_bikes from '../api/types_bikes';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka()
	.use('/api/v1/bikes', bikes)
	.use('/api/v1/users', users)
	.use('/api/v1/brands', brands)
	.use('/api/v1/types_bikes', types_bikes)
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
