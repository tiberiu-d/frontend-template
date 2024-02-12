"use client";
// Reusable Modal Component that is Reusable and can be used again

import { useRef } from "react";

// graphical stuff
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// icons
import { CheckCircleIcon, CircleOffIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// props definition (if applicable)
type ModalProps = {
  title: string;
  size: string;
  children?: React.ReactNode;
  // functions
  onClose: () => void;
  onOk: () => void;
};

export default function Modal({
  title,
  children,
  size,
  onClose,
  onOk,
}: ModalProps) {
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
      className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-black/5 backdrop-blur-xs"
    >
      <Card
        className={cn(
          " bg-white shadow-2xl",
          size === "md" && "w-[550px]",
          size === "xl" && "w-[900px]",
        )}
      >
        <CardTitle className="p-4 text-xl">{title}</CardTitle>
        <Separator />
        <CardContent className="flex flex-col gap-4 py-3 shadow-md">
          <div className="min-h-[200px] p-0">{children}</div>
        </CardContent>
        <div className="flex items-center justify-end gap-4 p-4">
          <Button size="sm" onClick={handleOnClose}>
            <CircleOffIcon className="mr-2 h-5 w-4 text-red-500" />
            Cancel
          </Button>
          <Button size="sm" onClick={handleOnOk}>
            Done
            <CheckCircleIcon className="ml-2 h-5 w-4 text-green-500" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
