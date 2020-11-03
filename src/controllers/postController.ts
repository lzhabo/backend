import { RequestHandler } from "express";
import { Post } from "../models/Post";

export const getAllPosts: RequestHandler<null> = async (req, res, next) => {
  // throw new Error("Not implemented");
  const posts = await Post.find({}).populate("user").exec();
  res.send(posts);
};
export const getPostById: RequestHandler = async (req, res, next) => {
  const post = await Post.findById(req.params.id).populate("user").exec();
  res.send(post);
};

export const createPost: RequestHandler = async (req, res, next) => {
  const post = await Post.create(req.body);
  res.send(post);
};
export const updatePost: RequestHandler = async (req, res, next) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body);
  res.send(post);
};
export const deletePost: RequestHandler = async (req, res, next) => {
  await Post.findByIdAndDelete(req.params.id);
  res.send("OK");
};
