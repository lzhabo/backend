import { Router } from "express";
import * as itemController from "./controllers/itemController";
import * as userController from "./controllers/userController";
import * as postController from "./controllers/postController";
import * as commentController from "./controllers/commentController";

const router = Router();

router.get("/", (req, res) => res.send("Hello World"));

// Item routes
router.get("/items/", itemController.getAllItems);
router.get("/items/:id", itemController.getItemById);
router.post("/items/", itemController.createItem);
router.put("/items/:id", itemController.updateItem);
router.delete("/items/:id", itemController.deleteItem);

// User routes
router.get("/users/", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.post("/users/", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

// Post routes
router.get("/posts/", postController.getAllPosts);
router.get("/posts/:id", postController.getPostById);
router.post("/posts/", postController.createPost);
router.put("/posts/:id", postController.updatePost);
router.delete("/posts/:id", postController.deletePost);

// Comment routes
router.get("/comments/", commentController.getAllComments);
router.get("/comments/:id", commentController.getCommentById);
router.post("/comments/", commentController.createComment);
router.put("/comments/:id", commentController.updateComment);
router.delete("/comments/:id", commentController.deleteComment);

export { router };
