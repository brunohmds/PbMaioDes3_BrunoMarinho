import { Router } from 'express';
import userController from 'src/controllers/userControllers';
const router = Router();

router.post('/users/sign-up', userController.signUp);
router.post('/users/sign-in', userController.signIn);

export default router;
