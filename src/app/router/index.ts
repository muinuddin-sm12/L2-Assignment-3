import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { BlogRoutes } from '../modules/blog/blog.route';
import { AuthRoutes } from '../modules/auth/auth.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;