import jwt from "jsonwebtoken"
import config from "config"
import { TPreAccountUser } from '../models/types';

const signToken = (payload: TPreAccountUser) => {
	return jwt.sign(
		payload,
		config.get("SECRETS.jwt_key"),
		{ expiresIn: config.get("SECRETS.jwt_expiration") }
	);
};

export default signToken