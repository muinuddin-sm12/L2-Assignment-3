import { Router } from "express";
import { AuthController } from "./auth.controller";
import { UserValidation } from "../user/user.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = Router();

router.post('/register', validateRequest(UserValidation.userValidationSchema), AuthController.register)
router.post('/login')

export const AuthRoutes = router;