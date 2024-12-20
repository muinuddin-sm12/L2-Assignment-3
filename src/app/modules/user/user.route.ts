import express from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';
const router = express.Router();

router.delete('/blogs/:id', auth(USER_ROLE.admin), UserController.deleteBlog);
router.patch('/users/:id/block', auth(USER_ROLE.admin), UserController.blockUser)

export const UserRoutes = router;
