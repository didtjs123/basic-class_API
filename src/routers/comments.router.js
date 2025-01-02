import express from "express";

const router = express.Router();

// 댓글 작성
router.post("/posts/:postId/comments", async (req, res) => {});

// 댓글 목록 조회
router.get("/posts/:postId/comments", async (req, res) => {});

// 댓글 수정
router.patch("/comments/:commentId", async (req, res) => {});

// 댓글 삭제
router.delete("/comments/:commentId", async (req, res) => {});
