import mongoose from 'mongoose';
import Event from '../models/event';
import { dayOfWeek } from '../enums/dayOfWeek';

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/desafio_3');
});

afterAll(async () => {
  await mongoose.connection.close();
});

it('Should create a new event', async () => {
  await Event.deleteMany({});
  const eventData = {
    description: 'Music Concert',
    dayOfWeek: dayOfWeek.SABADO,
    userId: new mongoose.Types.ObjectId(),
  };

  const event = new Event(eventData);
  await event.save();

  const foundEvent = await Event.findById(event._id);

  expect(foundEvent).toBeTruthy();
  expect(foundEvent?.description).toBe(eventData.description);
  expect(foundEvent?.dayOfWeek).toBe(eventData.dayOfWeek);
  expect(foundEvent?.userId?.toString()).toBe(eventData.userId.toString());
});

it('Should not create an event without a description', async () => {
  await Event.deleteMany({});
  const eventData = {
    dayOfWeek: dayOfWeek.SEGUNDAFEIRA,
  };

  const event = new Event(eventData);

  let error;
  try {
    await event.save();
  } catch (err) {
    error = err;
  }

  expect(error).toBeTruthy();
  expect(error.errors.description).toBeTruthy();
});

it('Should not create an event with an invalid dayOfWeek', async () => {
  await Event.deleteMany({});
  const eventData = {
    description: 'Music Concert',
    dayOfWeek: 'InvalidDay',
  };

  const event = new Event(eventData);

  let error;
  try {
    await event.save();
  } catch (err) {
    error = err;
  }

  expect(error).toBeTruthy();
  expect(error.errors.dayOfWeek).toBeTruthy();
});

it('Should create an event without userId', async () => {
  await Event.deleteMany({});
  const eventData = {
    description: 'Art Exhibition',
    dayOfWeek: dayOfWeek.SEXTAFEIRA,
  };

  const event = new Event(eventData);
  await event.save();

  const foundEvent = await Event.findById(event._id);

  expect(foundEvent).toBeTruthy();
  expect(foundEvent?.description).toBe(eventData.description);
  expect(foundEvent?.dayOfWeek).toBe(eventData.dayOfWeek);
  expect(foundEvent?.userId).toBeUndefined();
});
