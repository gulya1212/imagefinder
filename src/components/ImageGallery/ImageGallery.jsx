import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
const ImageGallery = ({ images, isLoading, showModal }) => {
  const imageElem = images.map((image) => (
    <ImageGalleryItem
      key={image.id}
      {...image}
      isLoading={isLoading}
      showModal={showModal}
    />
  ));
  return <ul className="ImageGallery">{imageElem}</ul>;
};

export default ImageGallery;
