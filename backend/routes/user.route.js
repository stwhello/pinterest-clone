import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create", (req, res) => {
  const userInformation = req.body;

  console.log(userInformation);
});

router.get("/test", test);

export default router;
