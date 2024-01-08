import express from "express";
import Register from "../controllers/auth/register.js";
import Login from "../controllers/auth/login.js";
import Logout from "../controllers/auth/logout.js";
import forgetPassword from "../controllers/auth/forgetPassword.js";
import forgetPassword_email from "../controllers/auth/forgetPasswordEmail.js";
import changePassword from "../controllers/auth/changePassword.js";
import createWhiteBoard from "../controllers/whiteBoard/createWhiteBoard.js";
import delWhiteBoard from "../controllers/whiteBoard/delWhiteBoard.js";
import getWhiteBoard from "../controllers/whiteBoard/getWhiteBoard.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

//auth routes
router.post("/api/auth/register", Register);
router.post("/api/auth/login", Login);
router.post("/api/auth/logout", Logout);
router.post("/api/auth/forgetPassword", forgetPassword);
router.post("api/auth/changePassword", changePassword);
router.get("/api/auth/loggedUser", auth, loggedUser);

//whiteboard routes
router.post("/api/whiteboard/create", createWhiteBoard);
router.get("/api/whiteboard/:whiteboardId", getWhiteBoard);
router.put("/api/whiteboard/:whiteboardId");
router.delete("/api/whiteboard/:whiteboardId", delWhiteBoard);

//Drawing routes
router.post("/api/whiteboard/:whiteboardId/draw");
router.get("/api/whiteboard/:whiteboardId/draw");

//recording routes
router.put("/api/whiteboard/:whiteboardId/recording");
router.get("/api/whiteboard/:whiteboardId/recording");
router.put("/api/whiteboard/:whiteboardId/recording");
router.delete("/api/whiteboard/:whiteboardId/recording");
