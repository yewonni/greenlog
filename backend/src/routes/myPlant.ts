import { Router } from "express";
import { prisma } from "../utils/prisma";

const router = Router();

/**
 * 내 식물 목록 조회하기
 */

router.get("/", async (req, res) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ message: "인증 필요" });
    }

    const myPlants = await prisma.myPlant.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        plantType: true,
        waterRoutine: true,
        repotRoutine: true,
      },
    });

    return res.json(myPlants);
  } catch (error) {
    return res.status(500).json({ message: "내 식물 조회 실패" });
  }
});

/**
 * 내 식물 단건 조회하기
 */

router.get("/:id", async (req, res) => {
  try {
    const userId = req.userId;
    const plantId = Number(req.params.id);

    if (!userId) {
      return res.status(401).json({ message: "인증 필요" });
    }

    const myPlant = await prisma.myPlant.findFirst({
      where: {
        id: plantId,
        userId,
      },
      include: {
        plantType: true,
        waterRoutine: true,
        repotRoutine: true,
      },
    });

    if (!myPlant) {
      return res.status(404).json({ message: "식물을 찾을 수 없음" });
    }

    return res.json(myPlant);
  } catch (error) {
    return res.status(500).json({ message: "식물 조회 실패" });
  }
});

/**
 * 내 식물 등록
 */
router.post("/", async (req, res) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ message: "인증 필요" });
    }

    const {
      plantTypeId,
      nickname,
      imageUrl,
      waterRoutineId,
      repotRoutineId,
      plantedAt,
    } = req.body;

    if (
      !plantTypeId ||
      !nickname ||
      !waterRoutineId ||
      !repotRoutineId ||
      !plantedAt
    ) {
      return res.status(400).json({ message: "필수값 누락" });
    }

    const myPlant = await prisma.myPlant.create({
      data: {
        userId, // ← 여기서 이제 number 확정
        plantTypeId,
        nickname,
        imageUrl,
        waterRoutineId,
        repotRoutineId,
        plantedAt: new Date(plantedAt),
      },
    });

    return res.status(201).json(myPlant);
  } catch {
    return res.status(500).json({ message: "식물 등록 실패" });
  }
});

/**
 * 내 식물 수정
 */
router.put("/:id", async (req, res) => {
  try {
    const userId = req.userId;
    const plantId = Number(req.params.id);

    const existingPlant = await prisma.myPlant.findFirst({
      where: { id: plantId, userId },
    });

    if (!existingPlant) {
      return res.status(404).json({ message: "식물 없음" });
    }

    const updatedPlant = await prisma.myPlant.update({
      where: { id: plantId },
      data: req.body,
    });

    return res.json(updatedPlant);
  } catch {
    return res.status(500).json({ message: "식물 수정 실패" });
  }
});

/**
 * 내 식물 삭제
 */
router.delete("/:id", async (req, res) => {
  try {
    const userId = req.userId;
    const plantId = Number(req.params.id);

    const existingPlant = await prisma.myPlant.findFirst({
      where: { id: plantId, userId },
    });

    if (!existingPlant) {
      return res.status(404).json({ message: "식물 없음" });
    }

    await prisma.myPlant.delete({
      where: { id: plantId },
    });

    return res.status(204).send();
  } catch {
    return res.status(500).json({ message: "식물 삭제 실패" });
  }
});

export default router;
