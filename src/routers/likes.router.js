import express from "express";

const router = express.Router();

// 게시물 좋아요
router.post("/posts/:postId/likes", async (req, res) => {});

// 게시물 좋아요 취소
router.delete("/posts/:postId/likes", async (req, res) => {});
