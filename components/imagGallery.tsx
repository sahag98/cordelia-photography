// components/ImageGallery.js
import { isMobile } from "@/lib/isMobile";
import React from "react";

const ImageGallery = ({ images }: any) => {
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
                image: { url: string | undefined; alt: string | undefined },
                index: React.Key | null | undefined
              ) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-md shadow-md"
                >
                  <img
                    className="w-full h-auto rounded-md lg:rounded-lg"
                    src={image.url}
                    alt={image.alt}
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
