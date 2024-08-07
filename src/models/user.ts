import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

interface UserInterface extends Document {
  firstName: string;
  lastName: string;
  birthDate: Date;
  city: string;
  country: string;
  email: string;
  password: string;
  confirmPassword?: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema: Schema = new Schema({
  firstName: { type: String, required: true, minlength: 2 },
  lastName: { type: String, required: true, minlength: 2 },
  birthDate: { type: Date, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Middleware to hash password
userSchema.pre<UserInterface>('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string,
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model<UserInterface>('User', userSchema);

export default User;
