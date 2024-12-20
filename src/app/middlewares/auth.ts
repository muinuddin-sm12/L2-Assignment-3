import { NextFunction, Request, Response } from 'express';
import { TUserRole } from '../modules/user/user.interface';
import catchAsync from '../utils/catchAsync';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { User } from '../modules/user/user.model';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    // console.log(token);
    if (!token || !token.startsWith("Bearer ")) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }
    const actualToken = token.split(" ")[1];

    const decoded = jwt.verify(
      actualToken,
      config.jwt_access_secret as string,
    ) as JwtPayload;
    const { email, role } = decoded;

    const user = await User.findOne({ email });

    console.log('user from auth', user);
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'User is not found!');
    }

    const userStatus = user?.isBlocked;
    if (userStatus) {
      throw new AppError(httpStatus.FORBIDDEN, 'User is blocked!');
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }

    req.user = decoded as JwtPayload;

    next();
  });
};
export default auth;
