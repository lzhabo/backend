import mongoose, { Document } from "mongoose";

export interface User {
  name: string;
  avatar?: string;
}

export type UserDocument = Document & User;

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  avatar: { type: String, required: false },
});

export const User = mongoose.model<UserDocument>("User", UserSchema);
