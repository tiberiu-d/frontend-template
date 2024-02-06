"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Modal from "@/components/modal/modal";

const MainContent = () => {
  const [showModal, setShowModal] = useState(false);

  // handlers
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleOnOk = () => {
    console.log("clicked on OK !!!");
  };

  return (
    <>
      <h3>Main Content</h3>
      <main className="pt-10">
        <Button size="sm" onClick={handleToggleModal}>
          Open Modal
        </Button>
      </main>
      {showModal && (
        <Modal
          title="hellow world"
          onClose={handleToggleModal}
          onOk={handleOnOk}
        >
          hello world
        </Modal>
      )}
    </>
  );
};

export default MainContent;
