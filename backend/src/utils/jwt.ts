import jwt from "jsonwebtoken";

const ACCESS_SECRET = "access-secret";
const REFRESH_SECRET = "refresh-secret";

export function signAccessToken(userId: number) {
  return jwt.sign({ userId }, ACCESS_SECRET, {
    expiresIn: "15m",
  });
}

export function signRefreshToken(userId: number) {
  return jwt.sign({ userId }, REFRESH_SECRET, {
    expiresIn: "7d",
  });
}
