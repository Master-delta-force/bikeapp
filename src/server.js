import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import bikes from "../api/bikes";

import brands from "../api/brands";
import bikes_types from "../api/bikes_types";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka()
	.use('/api/v1/bikes', bikes)

	.use('/api/v1/brands', brands)
	.use('/api/v1/bikes_types', bikes_types)
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
