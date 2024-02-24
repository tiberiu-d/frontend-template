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
          title="Modal Title"
          size="md"
          onClose={handleToggleModal}
          onOk={handleOnOk}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi esse
          delectus dolorum? Ea laborum minima corrupti delectus aperiam
          asperiores expedita sed et praesentium, rem aut, repellendus adipisci
          non corporis in accusantium maxime eveniet soluta harum eligendi
          architecto facilis quas veritatis natus! Delectus, earum vitae eveniet
          facilis odio pariatur inventore a consequatur error eum dignissimos
          expedita alias recusandae temporibus velit? Qui nam impedit, laborum
          aliquid facilis cum quod mollitia, possimus illo maiores illum quis,
          debitis expedita at veniam dolore! Voluptate, sunt fugit tempore sed
          repellendus debitis. Itaque reiciendis ratione dignissimos debitis,
          sit officia iure culpa esse libero nostrum sed. Officia ipsum
          consectetur distinctio iusto voluptatibus error animi. Quo facere
          architecto consequatur sint quibusdam cumque ea deleniti ullam, amet
          nulla eos cum minus qui aliquid. Consequuntur itaque consectetur
          quibusdam recusandae, sit, inventore cum dolor dolore nam, fugiat
          perferendis velit. Consequatur, quae velit sed, eveniet voluptates,
          mollitia molestiae nihil fugiat voluptatem quaerat temporibus nam a
          amet perspiciatis excepturi quam ut! Aliquam ut molestias mollitia
          animi accusantium. Reprehenderit similique quod deserunt, porro magnam
          cum exercitationem saepe eaque fugiat tempore, voluptates consequuntur
          repellendus quis. Culpa numquam repellendus minima maxime ipsa tempore
          saepe consequatur doloremque labore non eaque at laboriosam, unde sit
          repellat inventore corrupti quia.
        </Modal>
      )}
    </>
  );
};

export default MainContent;
