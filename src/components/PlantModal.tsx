"use client";

import { useState } from "react";
import BaseModal from "./BaseModal";
import CustomSelect from "@/components/CustomSelect";
import Button from "./Button";

interface PlantFormModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  buttonLabel: string;
  initialValues?: {
    plantType: string;
    waterCycle: string;
    repotCycle: string;
    plantName: string;
  };
}

export default function PlantFormModal({
  open,
  onClose,
  title,
  buttonLabel,
  initialValues = {
    plantType: "허브",
    waterCycle: "매일",
    repotCycle: "매주",
    plantName: "",
  },
}: PlantFormModalProps) {
  const [plantType, setPlantType] = useState(initialValues.plantType);
  const [waterCycle, setWaterCycle] = useState(initialValues.waterCycle);
  const [repotCycle, setRepotCycle] = useState(initialValues.repotCycle);
  const [plantName, setPlantName] = useState(initialValues.plantName);

  return (
    <BaseModal open={open} onClose={onClose}>
      <div className="w-[500px] rounded-2xl p-8 bg-white">
        <div className="relative flex justify-center items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <img
            src="/icons/close.svg"
            alt="닫기"
            className="absolute right-0 cursor-pointer"
            onClick={onClose}
          />
        </div>

        {/* 이미지 업로드 */}
        <div className="w-50 h-50 bg-[#e7e7e7] border border-border rounded-lg flex justify-center items-center cursor-pointer mt-6 mx-auto">
          <img
            src="/icons/add-image.svg"
            alt="이미지 업로드하기"
            className="w-10 h-8"
          />
        </div>

        {/* 식물 종류 */}
        <div className="flex items-center gap-3 mt-8">
          <p className="text-primary font-bold">식물 종류 :</p>
          <CustomSelect
            options={["허브", "관엽", "다육"]}
            value={plantType}
            onChange={setPlantType}
          />
        </div>

        {/* 식물 이름 */}
        <div className="flex items-center gap-3 mt-5">
          <label htmlFor="plant-name" className="text-primary font-bold">
            식물 이름 :
          </label>
          <input
            id="plant-name"
            type="text"
            placeholder="직접 이름을 지어주세요"
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
            className="border-2 border-primary/50 rounded-md p-2 text-sm w-50 focus:outline-none"
          />
        </div>

        {/* 기본 루틴 */}
        <p className="text-primary font-bold mt-5">기본 루틴</p>
        <div className="flex flex-col gap-6 mt-4">
          {/* 물주기 */}
          <div className="flex items-center gap-4 ml-3">
            <p className="text-sm font-medium">&middot; 물주기 :</p>
            <CustomSelect
              options={["매일", "3일마다", "5일마다", "일주일마다", "2주마다"]}
              value={waterCycle}
              onChange={setWaterCycle}
            />
          </div>

          {/* 분갈이 */}
          <div className="flex items-center gap-4 ml-3">
            <p className="text-sm font-medium">&middot; 분갈이 :</p>
            <CustomSelect
              options={["매주", "2주마다", "1달마다", "필요 없음"]}
              value={repotCycle}
              onChange={setRepotCycle}
            />
          </div>

          {/* 햇빛 */}
          <div className="flex items-center gap-4 ml-3 text-sm font-medium">
            <p>&middot; 햇빛 :</p>
            <p className="ml-3 text-gray-800">간접광</p>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Button variant="dark" size="md">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </BaseModal>
  );
}
