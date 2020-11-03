import mongoose, { Document } from "mongoose";
import { IUser } from "../models/User.ts";

export interface IComment {
  user: IUser;
  content: string;
}

export type CommentDocument = Document & Comment;

const CommentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: IUser, required: true },
});

export const Comment = mongoose.model<CommentDocument>("Comment", CommentSchema);
