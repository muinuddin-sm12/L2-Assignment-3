/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

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
}, {timestamps: true});

userSchema.pre('save', async function(next){
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds))
  next();
})
userSchema.post('save', function(doc, next){
  doc.password = '';
  next()
})

export const User = model<TUser>('User', userSchema);
