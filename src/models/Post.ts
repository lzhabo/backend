import mongoose, { Document } from "mongoose";

export interface IPost {
  user: string;
  photo: string;
  location: string;
  likes: number;
  description: string;
  comments: IComment[];
}

export type PostDocument = Document & IPost;

const UserSchema = new mongoose.Schema({
  user: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  description: { type: String, required: false },
  location: { type: string, required: false },
  photo: { type: string, required: true },
  comments: {type: IComment[], required: false},
  likes: {type: number, required: true}
});

export const Post = mongoose.model<PostDocument>("Post", UserSchema);
