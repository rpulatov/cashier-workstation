const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const { AuthError } = require("../errors");
const Config = require("../config");

const db = require("../db")("user");
const models = require('../models')

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Config.SECRET,
    },
    async (payload, done) => {
      try {
        //реализация логики получения юзера
        const user = await models.User.findByPk(payload.id)
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (e) {
        done(e, false);
      }
    }
  )
);

module.exports = passport.authenticate("jwt", { session: false });
