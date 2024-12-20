import { Request, Response } from 'express';
import { UserServices } from './user.service';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  // const result = 
  await UserServices.deleteBlog(id);
  res.status(200).json({
    success: true,
    message: 'Blog deleted successfully',
    statusCode: httpStatus.OK,
    // data: result,
  });
});
const blockUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  // console.log(id);
  // const result = 
  await UserServices.blockUser(id);
  res.status(200).json({
    success: true,
    message: 'User blocked successfully',
    statusCode: httpStatus.OK,
    // data: result,
  });
});

export const UserController = {
  deleteBlog,
  blockUser
};
