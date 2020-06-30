import passport from 'passport';
import send from '@polka/send-type';
import '../../utils/strategy/jwt';

export const jwtAuthMiddleware = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (error, user, info) => {
        if (error) return next(error);
        if (!user) {
            send(res, 401,{
                message: 'Unauthorized',
                statusCode: 401,
            });
        }
        req.payload = user;
        next();
    })(req, res, next);
};
