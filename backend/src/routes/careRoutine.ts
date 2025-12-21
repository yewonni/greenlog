import { Router } from "express";
import { prisma } from "../utils/prisma";

const router = Router();

router.get("/", async (req, res) => {
  const { type } = req.query;

  if (type !== "WATER" && type !== "REPOT") {
    return res.status(400).json({ message: "type 파라미터가 필요합니다" });
  }

  try {
    const routines = await prisma.careRoutine.findMany({
      where: {
        type: type as "WATER" | "REPOT",
      },
      orderBy: {
        cycleDays: "asc",
      },
    });

    return res.json(routines);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "루틴 조회 실패" });
  }
});

export default router;
