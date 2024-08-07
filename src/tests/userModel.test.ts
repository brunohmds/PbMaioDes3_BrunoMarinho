import mongoose from 'mongoose';
import User from '../models/user';

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/desafio_3');
});

afterAll(async () => {
  await mongoose.connection.close();
});

it('Should hash the password before saving the user', async () => {
  await User.deleteMany({});

  const user = new User({
    firstName: 'Gustavo',
    lastName: 'Garcia',
    birthDate: '1990-01-01',
    city: 'Nova York',
    country: 'Estados Unidos',
    email: 'gustavogarcia@gmail.com',
    password: 'password',
  });

  await user.save();

  const savedUser = await User.findOne({ email: 'gustavogarcia@gmail.com' });

  expect(savedUser).not.toBeNull();
  expect(savedUser!.password).not.toBe('password');
});

it('Should compare passwords correctly', async () => {
  await User.deleteMany({});

  const user = new User({
    firstName: 'Gustavo',
    lastName: 'Garcia',
    birthDate: '1992-01-01',
    city: 'Nova York',
    country: 'Estados Unidos',
    email: 'gustavogarcia@gmail.com',
    password: 'password',
  });

  await user.save();

  const isMatch = await user.comparePassword('password');

  expect(isMatch).toBe(true);
});
