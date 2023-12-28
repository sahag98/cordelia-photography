"use client";
import React, { useState } from "react";
import MyModal from "./imageModal";
import { Pictures } from "@/types/Types";

const ImageGallery = ({ images }: { images: Pictures }) => {
  console.log("client: ", images);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  function closeModal() {
    setIsOpen(false);
  }

  function openModal(image: any) {
    setSelectedImg(image);
    setIsOpen(true);
  }

  const MAX_COLUMNS = 3;

  function getColumns(colIndex: number) {
    return images.filter(
      (img: any, idx: number) => idx % MAX_COLUMNS === colIndex
    );
  }

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, idx) => (
          <div key={idx} className="flex flex-col gap-4 lg:gap-4">
            {column.map(
              (
                image: {
                  url: any;
                  image: string | undefined;
                  ult: string | undefined;
                },
                index: React.Key | null | undefined
              ) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-md shadow-md"
                >
                  <img
                    onClick={() => openModal(image.image!)}
                    className="w-full h-auto rounded-md cursor-pointer lg:rounded-lg"
                    src={image.image}
                    alt={image.ult}
                  />
                  <MyModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    closeModal={closeModal}
                    openModal={openModal}
                    selectedImg={selectedImg}
                    setSelectedImg={setSelectedImg}
                  />
                </div>
              )
            )}
          </div>
        )
      )}
    </div>
  );
};

export default ImageGallery;
