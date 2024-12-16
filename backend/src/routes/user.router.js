// userRoutes.js
import express from 'express';
import User from "../models/user.model.js";
import { postAddAlert } from "../controllers/user.controller.js";
import { postDeleteAlert } from "../controllers/user.controller.js";

const router =  express.Router();

router.post('/user/alert', postAddAlert);
router.post('/user/delete', postDeleteAlert);



export default router;
