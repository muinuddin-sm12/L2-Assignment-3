import { Router } from "express";
import { AuthController } from "./auth.controller";
import { UserValidation } from "../user/user.validation";
import validateRequest from "../../middlewares/validateRequest";
import { AuthValidations } from "./auth.validation";

const router = Router();

router.post('/register', validateRequest(UserValidation.userValidationSchema), AuthController.register)
router.post('/login', validateRequest(AuthValidations.loginValidationSchema), AuthController.login);

export const AuthRoutes = router;