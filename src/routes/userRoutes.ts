import { Router } from 'express';
import userController from '../controllers/userControllers';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: API endpoints for managing users
 */

/**
 * @swagger
 * /users/sign-up:
 *   post:
 *     tags:
 *       - Users
 *     summary: "Sign up a new user"
 *     description: "Registers a new user."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               birthDate:
 *                 type: string
 *                 format: date
 *                 example: "2000-01-01"
 *               city:
 *                 type: string
 *                 example: "New York"
 *               country:
 *                 type: string
 *                 example: "USA"
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *               confirmPassword:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: "User registered successfully."
 *       400:
 *         description: "Validation error."
 *       500:
 *         description: "Error registering user."
 */
router.post('/users/sign-up', userController.signUp);

/**
 * @swagger
 * /users/sign-in:
 *   post:
 *     tags:
 *       - Users
 *     summary: "User login"
 *     description: "Authenticates a user and returns a JWT token."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: "User logged in successfully."
 *       400:
 *         description: "Invalid credentials."
 *       500:
 *         description: "Error during login."
 */
router.post('/users/sign-in', userController.signIn);

export default router;
