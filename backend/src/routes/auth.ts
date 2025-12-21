import { Router } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../utils/prisma";
import { signAccessToken, signRefreshToken } from "../utils/jwt";

const router = Router();

// 회원가입
router.post("/signup", async (req, res) => {
  const { email, password, nickname } = req.body;

  if (!email || !password || !nickname) {
    return res.status(400).json({ message: "필수값 누락" });
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return res.status(409).json({ message: "이미 존재하는 이메일" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      nickname,
    },
  });

  return res.status(201).json({
    id: user.id,
    email: user.email,
    nickname: user.nickname,
  });
});

// 로그인
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "필수값 누락" });
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(401).json({ message: "이메일 또는 비밀번호 오류" });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.status(401).json({ message: "이메일 또는 비밀번호 오류" });
  }

  const accessToken = signAccessToken(user.id);
  const refreshToken = signRefreshToken(user.id);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  return res.json({
    accessToken,
    user: {
      id: user.id,
      email: user.email,
      nickname: user.nickname,
    },
  });
});

export default router;
