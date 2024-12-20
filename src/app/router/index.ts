import { Router } from 'express';
import { BlogRoutes } from '../modules/blog/blog.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoutes } from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/admin',
    route: UserRoutes,
  }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
