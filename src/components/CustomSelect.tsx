"use client";

import { useState, useRef, useEffect } from "react";

interface CustomSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  width?: string;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  width = "w-[135px]",
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setOpen((prev) => !prev);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* 선택된 값 */}
      <div
        className={`flex justify-center items-center ${width} border-2 border-primary/50 text-sm font-bold p-2 rounded-md cursor-pointer`}
        onClick={toggleOpen}
      >
        <p>{value}</p>
        <img
          src={open ? "/icons/chevron-top.svg" : "/icons/chevron-bottom.svg"}
          alt="펼치기"
          className="absolute right-3"
        />
      </div>

      {/* 옵션 */}
      {open && (
        <div
          className={`${width} text-sm font-bold rounded-md border border-primary/50 absolute bg-white mt-1 z-10`}
        >
          {options.map((option) => {
            const isSelected = option === value;

            return (
              <div
                key={option}
                className={`
                  p-2 text-center cursor-pointer
                  ${isSelected ? "bg-primary text-white" : "hover-green"}
                `}
                onMouseDown={() => {
                  onChange(option);
                  setOpen(false);
                }}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
