import express from "express";
const router=express.Router();
import { sendMessage } from "./sendMessage.controller.js";

router.post('/send-message',sendMessage);

export default router