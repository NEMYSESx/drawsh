import express from "express";
import auth from "../middlewares/auth.js";
import createWhiteBoard from "../controllers/whiteBoard/createWhiteBoard.js";
import getWhiteboard from "../controllers/whiteBoard/getWhiteBoard.js";

const router = express.Router();

// Apply authentication middleware only to specific routes
router.post("/create", auth, createWhiteBoard);
router.get("/:whiteboardId", auth, getWhiteboard);

export default router;
