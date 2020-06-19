import passport from "passport"
import { Strategy, ExtractJwt } from "passport-jwt"
import Config from "../config"

import { User } from '../models'

passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Config.SECRET,
    },
    async (payload, done) => {
      try {
        //реализация логики получения юзера
        const user = await User.findByPk(payload.id)
        if (user) {
          done(null, user)
        } else {
          done(null, false)
        }
      } catch (e) {
        done(e, false)
      }
    }
  )
)

export const withAuth = passport.authenticate("jwt", { session: false })
