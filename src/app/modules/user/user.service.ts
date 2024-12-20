import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Blog } from '../blog/blog.model';
import { User } from './user.model';

const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};
const blockUser = async (id: string) => {
  const user = await User.findByIdAndUpdate(id, {isBlocked: true}, {new: true});
// console.log(user);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!');
  }
  return user;
};

export const UserServices = {
  deleteBlog,
  blockUser,
};
