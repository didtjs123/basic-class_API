import express from "express";

const router = express.Router();

// 프로필 사진 업로드
router.post("/users/:userId/profile-image", async (req, res) => {});

// 게시물 이미지 업로드
router.post("/users/:userId/post-image", async (req, res) => {});
