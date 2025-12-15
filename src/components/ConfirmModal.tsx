"use client";

import BaseModal from "./BaseModal";
import Button from "./Button";

interface ConfirmModalProps {
  open: boolean;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmModal({
  open,
  description,
  confirmLabel = "확인",
  cancelLabel = "취소",
  onCancel,
  onConfirm,
}: ConfirmModalProps) {
  return (
    <BaseModal open={open} onClose={onCancel}>
      {description && (
        <p className="text-sm text-secondary mb-4 text-center">{description}</p>
      )}
      <div className="flex justify-center gap-3">
        <Button onClick={onCancel} size="sm" variant="outline">
          {cancelLabel}
        </Button>
        <Button onClick={onConfirm} size="sm" variant="dark">
          {confirmLabel}
        </Button>
      </div>
    </BaseModal>
  );
}
