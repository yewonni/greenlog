import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Button from "@/components/Button";

export default function MyGardenDetail() {
  return (
    <>
      <Header />
      <main className="px-4 md:px-30 py-20">
        <article className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_1fr] gap-6 md:gap-10 items-start">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full">
            <div className="w-full md:w-[300px] aspect-square bg-gray-100 rounded-md relative overflow-hidden shrink-0">
              <Image
                src="/placeholder.png"
                alt="plant image"
                fill
                className="object-cover"
              />
            </div>

            {/* 정보 */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <div className="text-lg font-bold flex flex-col gap-2">
                  <p>
                    이름 : <span className="font-normal">초록이</span>
                  </p>
                  <p>
                    종류 : <span className="font-normal">관엽식물</span>
                  </p>
                </div>
                <p className="text-sub mt-2">등록일 : 2025.10.21 (53일째)</p>
              </div>

              <div className="flex gap-2 mt-4 md:mt-0 flex-wrap">
                <Button variant="outline" size="md">
                  삭제
                </Button>
                <Button variant="outline" size="md">
                  수정
                </Button>
              </div>
            </div>
          </div>

          <section className="bg-[#f0efec] w-full md:w-full md:max-w-[220px] h-[300px] rounded-md p-6 shadow-md relative self-start md:justify-self-end mt-10 md:mt-auto">
            <div className="absolute top-3 right-3 w-6 h-6">
              <Image src="/icons/pin.svg" alt="pin" width={24} height={24} />
            </div>

            <h2 className="font-semibold text-[#7f5b53] mb-8 mt-3">[루틴]</h2>
            <ul className="flex flex-col gap-8">
              <li className="flex items-center gap-3">
                <Image
                  src="/icons/water.svg"
                  alt="water"
                  width={24}
                  height={24}
                />
                <span>3일마다</span>
              </li>
              <li className="flex items-center gap-3">
                <Image src="/icons/pot.svg" alt="pot" width={24} height={24} />
                <span>필요 없음</span>
              </li>
              <li className="flex items-center gap-3">
                <Image src="/icons/sun.svg" alt="sun" width={24} height={24} />
                <span>간접광</span>
              </li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
