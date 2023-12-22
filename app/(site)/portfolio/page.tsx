import ImageGallery from "@/components/imagGallery";
import { Metadata } from "next";
import React from "react";
import { getPictures } from "@/sanity/sanity-utils";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of my images",
};

const Page = async () => {
  const pictures = await getPictures();

  console.log("pics: ", pictures);
  const images = [
    {
      url: "/m1.jpg",
      alt: "Image 1",
    },
    {
      url: "/m3.jpg",
      alt: "Image 2",
    },
    {
      url: "/m11.jpg",
      alt: "Image 3",
    },
    {
      url: "/m25.jpg",
      alt: "Image 4",
    },
    {
      url: "/m38.jpg",
      alt: "Image 5",
    },
    {
      url: "/m2.jpg",
      alt: "Image 6",
    },
    {
      url: "/m26.jpg",
      alt: "Image 7",
    },
    {
      url: "/m32.jpg",
      alt: "Image 8",
    },
    {
      url: "/m21.jpg",
      alt: "Image 8",
    },
    {
      url: "/m9.jpg",
      alt: "Image 8",
    },
    {
      url: "/m15.jpg",
      alt: "Image 8",
    },
    {
      url: "/m16.jpg",
      alt: "Image 8",
    },
    {
      url: "/m24.jpg",
      alt: "Image 8",
    },
    {
      url: "/m40.jpg",
      alt: "Image 8",
    },
    {
      url: "/m33.jpg",
      alt: "Image 8",
    },
    {
      url: "/m20.jpg",
      alt: "Image 8",
    },
    {
      url: "/m30.jpg",
      alt: "Image 8",
    },
    {
      url: "/m31.jpg",
      alt: "Image 8",
    },
    {
      url: "/m39.jpg",
      alt: "Image 8",
    },
    {
      url: "/m10.jpg",
      alt: "Image 8",
    },
    {
      url: "/m17.jpg",
      alt: "Image 8",
    },
    {
      url: "/m22.jpg",
      alt: "Image 8",
    },
    {
      url: "/m14.jpg",
      alt: "Image 8",
    },
    {
      url: "/m28.jpg",
      alt: "Image 8",
    },
    {
      url: "/m19.jpg",
      alt: "Image 8",
    },
    {
      url: "/m5.jpg",
      alt: "Image 8",
    },
    {
      url: "/m23.jpg",
      alt: "Image 8",
    },
    {
      url: "/m36.jpg",
      alt: "Image 8",
    },
    {
      url: "/m7.jpg",
      alt: "Image 8",
    },
    {
      url: "/m8.jpg",
      alt: "Image 8",
    },
    {
      url: "/m27.jpg",
      alt: "Image 8",
    },

    {
      url: "/m6.jpg",
      alt: "Image 8",
    },
    {
      url: "/m37.jpg",
      alt: "Image 8",
    },
    {
      url: "/m29.jpg",
      alt: "Image 8",
    },
    {
      url: "/m41.jpg",
      alt: "Image 8",
    },
    {
      url: "/m13.jpg",
      alt: "Image 8",
    },
    {
      url: "/m2.jpg",
      alt: "Image 8",
    },
    {
      url: "/m12.jpg",
      alt: "Image 8",
    },

    // Add more images as needed
  ];

  console.log(images.length);

  return (
    <div className="lg:px-20 px-4">
      <ImageGallery images={pictures} />
    </div>
  );
};

export default Page;
