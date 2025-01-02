import express from "express";

const router = express.Router();

// 회원가입
router.post("/auth/signup", async (req, res) => {});

// 로그인
router.post("/auth/login", async (req, res) => {});

// 로그아웃
router.post("/auth/logout", (req, res) => {});
