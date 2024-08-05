import { Router } from 'express';
import userControllers from '../controllers/userControllers';
const router = Router();

router.post('/users/sign-up', userControllers.signUp);
router.post('/users/sign-in', userControllers.signIn);

export default router;
