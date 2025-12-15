"use client";

import BaseModal from "./BaseModal";
import Button from "./Button";

interface SimpleModalProps {
  open: boolean;
  description?: string;
  onClose: () => void;
}

export default function SimpleModal({
  open,
  description,
  onClose,
}: SimpleModalProps) {
  return (
    <BaseModal open={open} onClose={onClose}>
      {description && (
        <p className="text-sm text-secondary mb-4 text-center">{description}</p>
      )}
      <div className="text-center">
        <Button onClick={onClose} size="sm" variant="outline">
          닫기
        </Button>
      </div>
    </BaseModal>
  );
}
