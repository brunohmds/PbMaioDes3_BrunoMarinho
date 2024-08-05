import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user';

dotenv.config();

const jwtSecret = process.env.JWT_SECRET as string;

if (!jwtSecret || typeof jwtSecret !== 'string') {
  throw new Error(
    'A variável de ambiente JWT_SECRET deve estar definida e ser uma string.',
  );
}

export default class userController {
  static async signUp(req: Request, res: Response) {
    const {
      firstName,
      lastName,
      birthDate,
      city,
      country,
      email,
      password,
      confirmPassword,
    } = req.body;

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: 'A senha de confirmação deve ser igual à senha.' });
    }

    try {
      const user = new User({
        firstName,
        lastName,
        birthDate,
        city,
        country,
        email,
        password,
      });

      await user.save();
      res.status(201).json({ message: 'Usuário criado com sucesso.' });
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Erro ao criar o usuário. Confira:', error });
    }
  }

  static async signIn(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: 'Email não cadastrado.' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Senha incorreta.' });
      }

      const token = jwt.sign({ userId: user._id }, jwtSecret, {
        expiresIn: '1h',
      });

      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao autenticar o usuário.', error });
    }
  }
}
