import { Router } from "express";
import { prisma } from "../utils/prisma";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const plantTypes = await prisma.plantType.findMany({
      orderBy: { id: "asc" },
    });

    res.json(plantTypes);
  } catch (error) {
    res.status(500).json({ message: "식물 타입 조회 실패" });
  }
});

export default router;
