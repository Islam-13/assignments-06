import { Router } from "express";
import * as PC from "./posts.controller.js";

const router = Router();

router.post("/create", PC.createPost);
router.get("/", PC.getPosts);
router.put("/:id", PC.updatePost);
router.delete("/:id", PC.deletePost);
router.get("/:id", PC.getPost);

export default router;
