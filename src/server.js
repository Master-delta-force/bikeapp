import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import passport from 'passport';
import { json } from 'body-parser';
import session from 'express-session';
import bikes from "../api/bikes";
import users from "../api/users";
import brands from '../api/brands';
import bikes_types from '../api/bikes_types';
import { jwtAuthMiddleware } from '../src/middleware/auth/jwt';
import { config } from "../src/config";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka()
    .use(
        json(),
        session({
              secret: config.jwt.secret,
              resave: true,
              saveUninitialized: true,
              cookie: {
                maxAge: 31536000
              },
            }))
	.use('/api/v1/bikes', jwtAuthMiddleware, bikes)
	.use('/api/v1/users', jwtAuthMiddleware, users)
	.use('/api/v1/brands', jwtAuthMiddleware, brands)
	.use('/api/v1/bikes_types', jwtAuthMiddleware, bikes_types)
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
