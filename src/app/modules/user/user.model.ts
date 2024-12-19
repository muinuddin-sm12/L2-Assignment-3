import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>({
  name: { type: String, required: [true, 'Name is required'] },
  email: { type: String, required: [true, 'Email is required'], unique: true },
  password: { type: String, required: [true, 'Password is required'] , select: false},
  role: {
    type: String,
    enum: {
      values: ['admin', 'user'],
      message: '{VALUE} is not supported',
    },
    default: 'user',
  },
  isBlocked: { type: Boolean, default: false },
});

export const User = model<TUser>('User', userSchema);
