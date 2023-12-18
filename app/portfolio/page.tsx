import ImageGallery from "@/components/imagGallery";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of my images",
};

const Page = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/16806729/pexels-photo-16806729/free-photo-of-a-single-white-cloud-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      alt: "Image 1",
    },
    {
      url: "https://images.pexels.com/photos/18221948/pexels-photo-18221948/free-photo-of-beautiful-brunette-woman-in-white-off-the-shoulder-dress-standing-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      alt: "Image 2",
    },
    {
      url: "https://images.pexels.com/photos/18111091/pexels-photo-18111091/free-photo-of-harbor-buildings-reflecting-in-marina-waters.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      alt: "Image 3",
    },
    {
      url: "https://images.pexels.com/photos/16143559/pexels-photo-16143559/free-photo-of-landscape-of-rocky-snowcapped-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      alt: "Image 4",
    },
    {
      url: "https://images.pexels.com/photos/5646986/pexels-photo-5646986.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      alt: "Image 5",
    },
    {
      url: "https://images.pexels.com/photos/18272969/pexels-photo-18272969/free-photo-of-lake-and-snow-on-rocks-behind.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      alt: "Image 6",
    },
    {
      url: "https://images.pexels.com/photos/18640994/pexels-photo-18640994/free-photo-of-back-of-a-woman-walking-along-a-wet-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      alt: "Image 7",
    },
    {
      url: "https://images.pexels.com/photos/8123680/pexels-photo-8123680.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      alt: "Image 8",
    },
    // Add more images as needed
  ];

  return (
    <div className="lg:px-20 px-4">
      <ImageGallery images={images} />
    </div>
  );
};

export default Page;
