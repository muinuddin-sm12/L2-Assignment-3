import { Router } from 'express';
import { BlogRoutes } from '../modules/blog/blog.route';
import { AuthRoutes } from '../modules/auth/auth.route';

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
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
