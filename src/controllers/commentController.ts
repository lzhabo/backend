import { RequestHandler } from "express";
import { Comment } from "../models/Comment";

export const getAllComments: RequestHandler<null> = async (req, res, next) => {
  // throw new Error("Not implemented");
  const items = await Comment.find({}).populate("user").exec();
  res.send(items);
};
export const getCommentById: RequestHandler = async (req, res, next) => {
  const item = await Comment.findById(req.params.id).populate("user").exec();
  res.send(item);
};

export const createComment: RequestHandler = async (req, res, next) => {
  const item = await Comment.create(req.body);
  res.send(item);
};
export const updateComment: RequestHandler = async (req, res, next) => {
  const item = await Comment.findByIdAndUpdate(req.params.id, req.body);
  res.send(item);
};
export const deleteComment: RequestHandler = async (req, res, next) => {
  await Comment.findByIdAndDelete(req.params.id);
  res.send("OK");
};
