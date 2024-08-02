import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

interface userInterface extends Document {
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
  firstName: { type: String, required: true, minlength: 5 },
  lastName: { type: String, required: true, minlength: 5 },
  birthDate: { type: Date, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});

// Funcion to hash user password
userSchema.pre<userInterface>('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.confirmPassword = undefined;
  }
  next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string,
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model<userInterface>('User', userSchema);

export default User;
