import mongoose, { Schema, Document } from 'mongoose';
import { dayOfWeek } from '../enums/dayOfWeek';

interface eventInterface extends Document {
  description: string;
  dayOfWeek: dayOfWeek;
  userId?: mongoose.Types.ObjectId;
}

const eventSchema: Schema = new Schema({
  description: { type: String, minlength: 5, required: true },
  dayOfWeek: { type: String, enum: Object.values(dayOfWeek), required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: false },
});

const Event = mongoose.model<eventInterface>('Event', eventSchema);

export default Event;
