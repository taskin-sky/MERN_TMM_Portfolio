import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

const encodeToken = (email, id) => {
  const payload = { email, id };
  const key = process.env.JWT_SECRET;
  const expire = process.env.JWT_EXPIRES_IN;

  return jwt.sign(payload, key, { expiresIn: expire });
};

const decodeToken = (token) => {};

const JWTConfig = {
  encodeToken,
  decodeToken,
};
export default JWTConfig;
