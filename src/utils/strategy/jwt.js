import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { config } from '../../config';

const strategyOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt.secret,
};

const actionStrategy = (tokenPayload, done) => {
    if (!tokenPayload) {
        throw ('Token not found');
    }
    done(null, { ...tokenPayload });
};

passport.use('jwt', new Strategy(strategyOpts, actionStrategy));
