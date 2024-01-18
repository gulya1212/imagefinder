import React from "react";
import Loader from "../loader/Loader";

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  isLoading,
  showModal,
}) => {
  return (
    <li onClick={() => showModal(largeImageURL)} className="ImageGalleryItem">
      {!isLoading ? (
        <img className="ImageGalleryItem-image" src={webformatURL} alt="" />
      ) : (
        <Loader />
      )}
    </li>
  );
};

export default ImageGalleryItem;
