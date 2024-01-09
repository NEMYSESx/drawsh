import express from "express";
import Register from "../controllers/auth/register.js";
import Login from "../controllers/auth/login.js";
import Logout from "../controllers/auth/logout.js";
import forgetPassword from "../controllers/auth/forgetPassword.js";
import forgetPassword_email from "../controllers/auth/forgetPasswordEmail.js";
import changePassword from "../controllers/auth/changePassword.js";
import loggedUser from "../controllers/auth/loggedUser.js";
import createWhiteBoard from "../controllers/whiteBoard/createWhiteBoard.js";
import delWhiteBoard from "../controllers/whiteBoard/delWhiteBoard.js";
import getWhiteBoard from "../controllers/whiteBoard/getWhiteBoard.js";
import auth from "../middlewares/auth.js";
import updateWhiteBoard from "../controllers/whiteBoard/updateWhiteBoard.js";
import startRecording from "../controllers/recording/startRecording.js";
import getRecording from "../controllers/recording/getRecording.js";
import stopRecording from "../controllers/recording/stopRecording.js";
import delRecording from "../controllers/recording/delRecording.js";
import delDrawing from "../controllers/drawing/delDrawing.js";
import createDrawing from "../controllers/drawing/createDrawing.js";
import updateDrawing from "../controllers/drawing/updateDrawing.js";
import getDrawings from "../controllers/drawing/getDrawing.js";

const router = express.Router();

//auth routes
router.post("/auth/register", Register);
router.post("/auth/login", Login);
router.post("/auth/logout", auth, Logout);
router.post("/auth/forgetPassword", forgetPassword_email);
router.post("/auth/changePassword", auth, changePassword);
router.post("/auth/resetPassword/:id/:token", forgetPassword);
router.get("/auth/loggedUser", auth, loggedUser);

//whiteboard routes
router.post("/whiteboard/create", auth, createWhiteBoard);
router.get("/whiteboard/:whiteboardId", auth, getWhiteBoard);
router.put("/whiteboard/:whiteboardId", auth, updateWhiteBoard);
router.delete("/whiteboard/:whiteboardId", auth, delWhiteBoard);

//Drawing routes
router.post("/whiteboard/:whiteboardId/:drawingId", auth, createDrawing);
router.get("/whiteboard/:whiteboardId/:drawingId", auth, getDrawings);
router.put("/whiteboard/:whiteboardId/:drawingId", auth, updateDrawing);
router.delete("/whiteboard/:whiteboardId/:drawingId", auth, delDrawing);
//recording routes
router.post("/whiteboard/:whiteboardId/recording", auth, startRecording);
router.get("/whiteboard/:whiteboardId/recording", auth, getRecording);
router.put("/whiteboard/:whiteboardId/recording", auth, stopRecording);
router.delete("/whiteboard/:whiteboardId/recording", auth, delRecording);

export default router;
