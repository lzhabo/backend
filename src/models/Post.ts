import mongoose, { Document } from "mongoose";

export interface IPost {
  user: string;
  photo: string;
  location?: string;
  likes: number;
  description?: string;
  comments?: string[];
}

export type TPostDocument = Document & IPost;

const UserSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "User" },
  description: { type: String, required: false },
  location: { type: String, required: false },
  photo: { type: String, required: true },
  comments: [{ type: String, required: false }],
  likes: { type: Number, required: true },
});

export const Post = mongoose.model<TPostDocument>("Post", UserSchema);
