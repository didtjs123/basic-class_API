import express from "express";

const router = express.Router();

// 사용자 팔로우
router.post("/users/:userId/follow", async (req, res) => {});

// 사용자 언팔로우
router.delete("/users/:userId/follow", async (req, res) => {});
