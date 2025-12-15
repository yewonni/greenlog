"use client";

import { use, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import PlantFormModal from "@/components/PlantModal";
import { useRouter } from "next/navigation";

const plantData = [
  { id: 1, name: "몬스테라", daysPlated: 53 },
  { id: 2, name: "스투키", daysPlated: 18 },
  { id: 3, name: "알로에", daysPlated: 2 },
  { id: 4, name: "제라늄", daysPlated: 30 },
  { id: 5, name: "행운목", daysPlated: 25 },
  { id: 6, name: "선인장", daysPlated: 28 },
  { id: 7, name: "에케베리아", daysPlated: 12 },
];

export default function MyGardenPage() {
  const router = useRouter();
  const [openPlantModal, setOpenPlantModal] = useState(false);

  return (
    <>
      <Header />

      <main className="px-4 pt-20 md:px-30 mx-auto mb-40">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary">
            내 정원
          </h2>
          <Button variant="primary" onClick={() => setOpenPlantModal(true)}>
            새 식물 심기
          </Button>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {plantData.map((plant) => (
            <li key={plant.id} className="flex justify-center">
              <article className="w-full">
                <div
                  className="aspect-square bg-gray-200 mb-4 flex items-center justify-center rounded-lg cursor-pointer"
                  onClick={() => router.push(`/my-garden/${plant.id}`)}
                >
                  이미지
                </div>
                <h3 className="text-lg font-semibold">{plant.name}</h3>
                <p className="text-sm font-medium text-sub">
                  {plant.daysPlated}일째
                </p>
              </article>
            </li>
          ))}
        </ul>
      </main>

      <Footer />

      <PlantFormModal
        open={openPlantModal}
        onClose={() => setOpenPlantModal(false)}
        title="새 식물 심기"
        buttonLabel="등록하기"
      />
    </>
  );
}
