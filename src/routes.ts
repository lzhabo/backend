import { Router } from "express";
import * as itemController from "./controllers/itemController";
import * as userController from "./controllers/userController";
import * as postController from "./controllers/postController";

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
router.get("/posts/", postController.getAllUsers);
router.get("/posts/:id", postController.getUserById);
router.post("/posts/", postController.createUser);
router.put("/posts/:id", postController.updateUser);
router.delete("/posts/:id", postController.deleteUser);

export { router };
