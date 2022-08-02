import express from "express";
import authGuard from "../middleware/auth";
import unauthed from "../controllers/public.controller";
import admin from "../controllers/admin.controller";

const router = express.Router();

// Public routes
router.post("/", unauthed.pong);

// Auth routes
router.get("/bill/:mid", authGuard.admin, admin.pong);

export = router;
