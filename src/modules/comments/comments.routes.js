import { Router } from "express";
import * as CC from "./comments.controller.js";

const router = Router();

router.post("/create", CC.createComment);
router.get("/", CC.getComments);
router.put("/:id", CC.updateComment);
router.delete("/:id", CC.deleteComment);

export default router;
