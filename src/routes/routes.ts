import express from "express";
import register from "../controllers/auth/register.js";

const router = express.router();

//auth routes
router.post("/api/auth/register", register);
router.post("/api/auth/login");
router.post("/api/auth/logout");
router.post("/api/auth/forgetPassword");
router.post("api/auth/changePassword");

//whiteboard routes
router.post("/api/whiteboard/create");
router.get("/api/whiteboard/:whiteboardId");
router.put("/api/whiteboard/:whiteboardId");
router.delete("/api/whiteboard/:whiteboardId");

//Drawing routes
router.post("/api/whiteboard/:whiteboardId/draw");
router.get("/api/whiteboard/:whiteboardId/draw");

//recording routes
router.put("/api/whiteboard/:whiteboardId/recording");
router.get("/api/whiteboard/:whiteboardId/recording");
router.put("/api/whiteboard/:whiteboardId/recording");
router.delete("/api/whiteboard/:whiteboardId/recording");
