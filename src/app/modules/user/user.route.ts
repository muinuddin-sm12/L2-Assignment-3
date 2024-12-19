import express from 'express';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
const router = express.Router();

router.post('/register', UserValidation.userValidationSchema, UserController.createUser);

export const UserRoutes = router;