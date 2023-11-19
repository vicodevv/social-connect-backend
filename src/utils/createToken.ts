import * as jwt from 'jsonwebtoken';

export const createToken = (user: any) => {
  const expiresIn = process.env.EXPIRES_IN;
  const secretOrKey = process.env.JWT_SECRET;

  const token = jwt.sign({ user }, secretOrKey, { expiresIn });
  return {
    expires_in: expiresIn,
    access_token: token,
  };
};
