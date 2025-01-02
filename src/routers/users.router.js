import express from "express";

const router = express.Router();

// 프로필 조회
router.get("/users/:userId", async (req, res) => {});

// 프로필 수정
router.patch("/users/profile", async (req, res) => {});

// 회원 탈퇴
router.post("/users/:userId", async (req, res) => {});
