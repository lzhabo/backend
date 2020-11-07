import mongoose, { Document } from "mongoose";

export interface Comment {
  content: string;
  user: string;
}

export type TCommentDocument = Document & Comment;

const CommentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

export const Comment = mongoose.model<TCommentDocument>("Comment", CommentSchema);
