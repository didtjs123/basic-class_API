import express from "express";

const router = express.Router();

// 게시물 작성
router.post("/posts", async (req, res) => {});

// 게시물 목록 조회
router.get("/posts", async (req, res) => {});

// 게시물 상세 조회
router.get("/posts/:postId", async (req, res) => {});

// 게시물 수정
router.patch("/posts/:postId", async (req, res) => {});

// 게시물 삭제
router.delete("/posts/:postId", async (req, res) => {});
