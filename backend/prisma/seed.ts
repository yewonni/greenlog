import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.plantType.createMany({
    data: [
      { name: "관엽식물" },
      { name: "다육·선인장" },
      { name: "허브" },
      { name: "꽃식물" },
      { name: "공기정화식물" },
    ],
  });

  await prisma.careRoutine.createMany({
    data: [
      // 물주기
      { type: "WATER", label: "매일", cycleDays: 1 },
      { type: "WATER", label: "3일마다", cycleDays: 3 },
      { type: "WATER", label: "7일마다", cycleDays: 7 },
      { type: "WATER", label: "10일마다", cycleDays: 10 },
      { type: "WATER", label: "14일마다", cycleDays: 14 },

      // 분갈이
      { type: "REPOT", label: "30일마다", cycleDays: 30 },
      { type: "REPOT", label: "90일마다", cycleDays: 90 },
      { type: "REPOT", label: "180일마다", cycleDays: 180 },
      { type: "REPOT", label: "1년마다", cycleDays: 365 },
    ],
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
