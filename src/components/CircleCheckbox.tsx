"use client";

import Image from "next/image";

interface CircleCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: number;
  disabled?: boolean;
}

export default function CircleCheckbox({
  checked,
  onChange,
  size = 24,
  disabled = false,
}: CircleCheckboxProps) {
  const handleClick = () => {
    if (disabled) return;
    onChange(!checked);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center ${
        disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer"
      }`}
      style={{ width: size, height: size }}
      aria-pressed={checked}
    >
      <Image
        src={checked ? "/icons/circle-on.svg" : "/icons/circle-off.svg"}
        alt={checked ? "checked" : "unchecked"}
        width={size}
        height={size}
        draggable={false}
      />
    </button>
  );
}
