import express from "express";
import * as UC from "./users.controller.js";
import emailExist from "../../../middleware/emailExist.js";

const router = express.Router();

router.post("/signup", emailExist, UC.signup);
router.post("/login", UC.login);
router.get("/userPost/:author", UC.userPostComments);
export default router;
