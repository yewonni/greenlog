"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Button from "@/components/Button";
import { useState, useMemo } from "react";

const emotionLabelMap = {
  calm: "평온해요",
  good: "좋아요",
  happy: "행복해요",
  sad: "슬퍼요",
  angry: "화나요",
} as const;

type EmotionType = keyof typeof emotionLabelMap;

type EmotionRecord = {
  id: number;
  emotion: EmotionType;
  createdAt: string;
  content: string;
};

const allMockData: EmotionRecord[] = [
  { id: 1, emotion: "calm", createdAt: "2025-07-12", content: "7월 기록 1" },
  { id: 2, emotion: "good", createdAt: "2025-07-20", content: "7월 기록 2" },
  { id: 3, emotion: "sad", createdAt: "2025-08-05", content: "8월 기록 1" },
  { id: 4, emotion: "happy", createdAt: "2025-08-12", content: "8월 기록 2" },
  {
    id: 5,
    emotion: "calm",
    createdAt: "2025-10-12",
    content: "오늘 원하는 대로 모든 것이 잘 풀려서 기분이 너무 좋다.",
  },
  {
    id: 6,
    emotion: "good",
    createdAt: "2025-10-19",
    content: "바깥에 비가 추적추적 내리고 있다.",
  },
  {
    id: 7,
    emotion: "sad",
    createdAt: "2025-10-22",
    content: "기분이 싱숭생숭하다.",
  },
  {
    id: 8,
    emotion: "calm",
    createdAt: "2025-10-28",
    content: "오늘은 아무 일이 일어나지 않았다..",
  },
  {
    id: 9,
    emotion: "angry",
    createdAt: "2025-10-30",
    content: "되는 게 없어서 속상하고 화가 나는 하루다.",
  },
  {
    id: 10,
    emotion: "happy",
    createdAt: "2025-11-02",
    content: "새 프로젝트가 잘 진행되고 있다.",
  },
  {
    id: 11,
    emotion: "calm",
    createdAt: "2025-11-03",
    content: "산책하면서 마음을 비울 수 있었다.",
  },
];

const getRecentThree = (data: EmotionRecord[]) =>
  [...data]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 3);

const groupByMonth = (data: EmotionRecord[]) =>
  data.reduce((acc, record) => {
    const date = new Date(record.createdAt);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(record);
    return acc;
  }, {} as Record<string, EmotionRecord[]>);

export default function EmotionPage() {
  const [openMonth, setOpenMonth] = useState<Record<string, boolean>>({});
  const [showAllMonths, setShowAllMonths] = useState(false);

  const recentRecords = useMemo(() => getRecentThree(allMockData), []);
  const monthlyRecords = useMemo(() => groupByMonth(allMockData), []);

  const toggleMonth = (month: string) => {
    setOpenMonth((prev) => ({ ...prev, [month]: !prev[month] }));
  };

  const sortedMonths = useMemo(() => {
    return Object.keys(monthlyRecords).sort(
      (a, b) => new Date(b + "-01").getTime() - new Date(a + "-01").getTime()
    );
  }, [monthlyRecords]);

  const visibleMonths = showAllMonths ? sortedMonths : sortedMonths.slice(0, 3);
  const hiddenMonths = sortedMonths.slice(3);

  return (
    <>
      <Header />
      <main className="px-4 md:px-30 py-20">
        {/* 기록하기 */}
        <section>
          <h2 className="text-base md:text-2xl">
            <span className="font-bold mr-1">10월 21일,</span>
            예원님 감정을 기록해보세요
          </h2>

          <div className="flex gap-6 mt-8 mb-6">
            {["calm", "good", "happy", "sad", "angry"].map((e) => (
              <Image
                key={e}
                src={`/icons/${e}-emotion.svg`}
                alt="emotion"
                width={36}
                height={36}
              />
            ))}
          </div>

          <textarea
            className="w-full rounded-md h-[168px] border border-border p-4"
            placeholder="오늘 하루는 어떠셨나요?"
          ></textarea>

          <div className="text-right mt-4">
            <Button variant="dark" size="md">
              기록하기
            </Button>
          </div>
        </section>

        {/* 최근 기록 */}
        <section className="mt-20 md:mt-30">
          <h2 className="text-lg md:text-2xl font-bold">최근 기록</h2>

          <ul className="space-y-6 mt-6">
            {recentRecords.map((record) => (
              <li key={record.id}>
                <div className="bg-white shadow-sm p-5 md:p-8 rounded-md">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 md:gap-3">
                      <Image
                        src={`/icons/${record.emotion}-emotion.svg`}
                        alt="emotion"
                        width={20}
                        height={20}
                      />
                      <p className="font-bold text-sm md:text-lg">
                        {emotionLabelMap[record.emotion]}
                      </p>
                    </div>
                    <p className="text-sub text-sm">{record.createdAt}</p>
                  </div>
                  <p className="mt-4">{record.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 전체 기록 */}
        <section className="mt-20 md:mt-30">
          <h2 className="text-lg md:text-2xl font-bold mb-6">전체 기록</h2>

          {visibleMonths.map((monthKey) => {
            const isOpen = openMonth[monthKey];
            const label = monthKey.replace("-", ".");

            return (
              <article key={monthKey} className="mb-5">
                <div
                  className="flex items-center gap-2 cursor-pointer select-none"
                  onClick={() => toggleMonth(monthKey)}
                >
                  <p className="text-base md:text-lg font-semibold">{label}</p>
                  <img
                    src={
                      isOpen ? "/icons/toggle-on.svg" : "/icons/toggle-off.svg"
                    }
                    alt="toggle"
                    className="w-4"
                  />
                </div>

                {isOpen && (
                  <ul className="w-full rounded-md bg-[#f5f5f5] border border-border p-4 md:p-6 mt-3 space-y-4 max-h-80 md:max-h-96 overflow-y-auto">
                    {monthlyRecords[monthKey].map((item) => (
                      <li
                        key={item.id}
                        className="bg-white border border-border rounded-md p-4 md:p-5 flex flex-col md:flex-row md:justify-between md:items-center"
                      >
                        <div className="flex gap-4 items-center">
                          <span className="text-sub shrink-0">
                            {item.createdAt.slice(5).replace("-", ".")}
                          </span>
                          <p className="text-sm md:text-base">{item.content}</p>
                        </div>

                        <img
                          src={`/icons/${item.emotion}-emotion.svg`}
                          alt={item.emotion}
                          className="w-5 self-end md:self-center"
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}

          {hiddenMonths.length > 0 && !showAllMonths && (
            <div className="text-center mt-4">
              <button
                className="border border-primary text-primary text-sm sm:text-base font-semibold p-2 rounded-3xl px-5 w-full sm:w-[400px] hover:bg-gray-50 mt-5"
                onClick={() => setShowAllMonths(true)}
              >
                지난 달 더보기
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
