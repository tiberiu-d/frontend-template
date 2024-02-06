"use client";
// Reusable Modal Component that is Reusable and can be used again

import { useRef } from "react";

// graphical stuff
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// icons
import { CheckCircleIcon } from "lucide-react";

// props definition (if applicable)
type ModalProps = {
  title: string;
  children?: React.ReactNode;
  // functions
  onClose: () => void;
  onOk: () => void;
};

export default function Modal({ title, children, onClose, onOk }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // handlers
  const handleOnClose = () => {
    onClose();
  };

  const closeModal = (event: React.MouseEvent) => {
    if (modalRef.current === event.target) {
      handleOnClose();
    }
  };

  const handleOnOk = () => {
    onOk();
    handleOnClose();
  };

  return (
    <div
      id="modal-backdrop"
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-black/5 backdrop-blur-sm"
    >
      <Card className="w-[500px] bg-white shadow-2xl">
        <CardTitle className="p-3 text-xl">{title}</CardTitle>
        <Separator />
        <CardContent className="flex flex-col gap-4 py-3">
          <div>{children}</div>
          <div className="flex items-center justify-end gap-4">
            <Button size="sm" onClick={handleOnOk}>
              Done
              <CheckCircleIcon className="ml-2 h-5 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
