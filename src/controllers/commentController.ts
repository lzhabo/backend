import { RequestHandler } from "express";
import { Comment } from "../models/Comment";

export const getAllComments: RequestHandler<null> = async (req, res, next) => {
  // throw new Error("Not implemented");
  const comments = await Comment.find({}).exec();
  res.send(comments);
};
export const getCommentById: RequestHandler = async (req, res, next) => {
  const comment = await Comment.findById(req.params.id);
  res.send(comment);
};

export const createComment: RequestHandler = async (req, res, next) => {
  const comment = await Comment.create(req.body);
  res.send(comment);
};
export const updateComment: RequestHandler = async (req, res, next) => {
  const comment = await Comment.findByIdAndUpdate(req.params.id, req.body);
  res.send(comment);
};
export const deleteComment: RequestHandler = async (req, res, next) => {
  await Comment.findByIdAndDelete(req.params.id);
  res.send("OK");
};
