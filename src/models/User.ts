import mongoose, { Document } from "mongoose";

export interface User {
  name: string;
  avatar?: string;
}

export type TUserDocument = Document & User;

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  avatar: { type: String, required: false },
});

export const User = mongoose.model<TUserDocument>("User", UserSchema);
