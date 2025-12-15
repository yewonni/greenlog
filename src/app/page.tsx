"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button, { ViewAllButton } from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const myPlants = [
  { id: 1, name: "몬스테라", days: 53, img: "/images/plant1.png" },
  { id: 2, name: "스투키", days: 21, img: "/images/plant2.png" },
  { id: 3, name: "산세베리아", days: 87, img: "/images/plant3.png" },
  { id: 4, name: "제라늄", days: 12, img: "/images/plant4.png" },
];

const routines = [
  { id: 1, plant: "몬스테라", tasks: ["물주기", "분갈이"] },
  { id: 2, plant: "스투키", tasks: ["분갈이"] },
  { id: 3, plant: "산세베리아", tasks: ["분갈이"] },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Header />

      {/* Banner */}
      <div className="relative w-full">
        <div className="w-full min-h-60 md:min-h-[500px] bg-[url('/images/banner-bg.png')] bg-cover bg-center bg-no-repeat"></div>

        {/* Banner Text */}
        <div className="absolute top-13 left-4 md:top-30 md:left-30 z-30">
          <p className="hidden md:flex text-xl md:text-5xl font-semibold leading-tight">
            Every plant has a story.
          </p>

          <div className="mt-3 md:mt-6">
            <div className="flex gap-2 items-baseline">
              <span className="font-bold text-primary text-[22px] md:text-4xl">
                Grow your days,
              </span>
              <span className="hidden md:flex font-medium text-[22px] md:text-4xl">
                gently
              </span>
            </div>

            <p className="mt-2 md:mt-5 text-sm md:text-lg font-medium">
              당신의 식물과 하루를 기록하세요.
            </p>

            <div className="hidden md:flex mt-6">
              <Button
                variant="dark"
                size="lg"
                onClick={() => router.push("/my-garden")}
              >
                나의 식물 보러가기
              </Button>
            </div>
            <div className="flex md:hidden mt-6">
              <Button
                variant="dark"
                size="sm"
                onClick={() => router.push("/my-garden")}
              >
                나의 식물 보러가기
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="bg-main px-4 md:px-30 pt-12 pb-[108px]">
        {/** 나의 식물 */}
        <section>
          <div className="flex justify-between mb-4 sm:mb-6 items-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-black">
              나의 식물
            </h2>
            <ViewAllButton onClick={() => router.push("/my-garden")} />
          </div>

          {/* mobile */}
          <div className="flex md:hidden overflow-x-auto gap-4 pb-4">
            {myPlants.map((plant) => (
              <div
                key={plant.id}
                className="w-[140px] sm:w-40 bg-white rounded-md p-3 shrink-0 cursor-pointer"
                onClick={() => router.push(`/my-garden/${plant.id}`)}
              >
                <div className="bg-gray-200 w-full aspect-square rounded-md flex items-center justify-center">
                  <Image
                    src={plant.img}
                    alt={plant.name}
                    width={120}
                    height={120}
                  />
                </div>
                <p className="mt-2 text-base font-semibold truncate">
                  {plant.name}
                </p>
                <p className="text-sub text-sm">{plant.days}일째</p>
              </div>
            ))}
          </div>

          {/* desktop  */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {myPlants.map((plant) => (
              <div key={plant.id} className="bg-white rounded-md p-5">
                <div className="bg-gray-200 w-full aspect-square rounded-md flex items-center justify-center">
                  <Image
                    src={plant.img}
                    alt={plant.name}
                    width={150}
                    height={150}
                  />
                </div>
                <div className="flex justify-between mt-4 items-center">
                  <p className="text-lg font-semibold">{plant.name}</p>
                  <Image
                    src="/icons/circle-arrow.svg"
                    alt="arrow"
                    width={30}
                    height={30}
                    className="cursor-pointer"
                    onClick={() => router.push(`/my-garden/${plant.id}`)}
                  />
                </div>
                <p className="text-sub text-sm">{plant.days}일째</p>
              </div>
            ))}
          </div>
        </section>

        {/** 오늘의 루틴 */}
        <section className="mt-20 md:mt-[108px] pb-14 border-b border-main">
          <div className="flex justify-between mb-4 sm:mb-6 items-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-black">
              오늘의 루틴
            </h2>
            <ViewAllButton />
          </div>

          <p className="text-sub text-sm sm:text-base">
            오늘 루틴을 시작해보세요!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-7">
            {routines.map((rt) => (
              <div
                key={rt.id}
                className="bg-[#F0EFEC] rounded-lg shadow-md p-5 h-[105px]  md:h-[125px]
                flex flex-col justify-between"
              >
                <p className="font-semibold text-base md:text-xl">{rt.plant}</p>

                <div className="flex gap-5">
                  {rt.tasks.map((task, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Image
                        src={
                          task === "물주기"
                            ? "/icons/water.svg"
                            : "/icons/pot.svg"
                        }
                        alt={task}
                        width={24}
                        height={24}
                        className="w-5 h-5 md:w-7 md:h-7"
                      />
                      <p className="text-sm md:text-base">{task}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="font-semibold text-xl mt-5 text-right">(1/3)</p>
        </section>

        {/** 오늘의 기분 */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-black mt-[50px] sm:mt-[77px]">
            지금 기분은 어때요?
          </h2>
          <div className="flex gap-7 mt-5 md:mt-9">
            <Image
              src="/icons/good-emotion.svg"
              alt="good"
              width={36}
              height={36}
            />
            <Image
              src="/icons/calm-emotion.svg"
              alt="calm"
              width={36}
              height={36}
            />
            <Image
              src="/icons/sad-emotion.svg"
              alt="sad"
              width={36}
              height={36}
            />
            <Image
              src="/icons/angry-emotion.svg"
              alt="angry"
              width={36}
              height={36}
            />
            <Image
              src="/icons/happy-emotion.svg"
              alt="happy"
              width={36}
              height={36}
            />
          </div>
          <div className="relative mt-7">
            <textarea
              placeholder="당신의 감정을 담은 짧은 메모를 남겨보세요."
              className="w-full bg-white rounded-lg border border-main min-h-[115px] p-4 resize-none"
            ></textarea>

            <p className="absolute bottom-3 right-3 text-sub text-sm">0 / 30</p>
          </div>
          <div className="hidden sm:flex justify-end mt-8">
            <Button variant="dark" size="lg">
              기록하기
            </Button>
          </div>
          <div className="flex sm:hidden justify-end mt-8">
            <Button variant="dark" size="md">
              기록하기
            </Button>
          </div>
        </section>

        {/** 주간 감정 & 성장 */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-black mt-[50px] sm:mt-[77px]">
            주간 감정 & 성장
          </h2>
          <div className="mt-6 sm:mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div className="flex-1">
              <div className="w-full border border-main rounded-md h-[280px]">
                차트
              </div>
              <p className="text-sm sm:text-base text-center font-bold mt-4">
                이번 주 <span className="text-primary">감정 변화</span>
              </p>
            </div>
            <div className="flex-1">
              <div className="w-full border border-main rounded-md h-[280px]">
                스냅샷
              </div>
              <p className="text-primary text-sm sm:text-base text-center font-bold mt-4">
                식물 성장 <span className="text-secondary">스냅샷</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
