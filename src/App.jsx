import axios from "axios";
import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import Pagination from "./components/Pagination/Pagination";
import Modal from "./components/Modal/Modal";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("nature");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [totalImages, setTotalImages] = useState(0);
  const [src, setSrc] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const API = `https://pixabay.com/api/?key=41753570-b58f0fd93689cb4dbbd4a6362&q=${query}&image_type=photo&per_page=12&page=${currentPage}`;

  const fetchImages = async () => {
    try {
      await axios.get(API).then((response) => {
        setImages(response.data.hits);
        setTotalImages(response.data.totalHits);
        console.log(response);
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [query, currentPage]);

  const handleSubmit = (query) => {
    setQuery(query);
  };

  const handleNext = () => {
    if (totalImages / 9 > currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleModal = (src) => {
    setShowModal((prevState) => !prevState);
    setSrc(src);
  };

  return (
    <>
      <main className="App">
        <Searchbar handleSubmit={handleSubmit} />
        <ImageGallery
          images={images}
          isLoading={isLoading}
          showModal={toggleModal}
        />
        <Pagination
          currentPage={currentPage}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
        {showModal && (
          <Modal closeModal={toggleModal}>
            <img
              src={src}
              style={{
                height: "90vh",
                width: "70vw",
                borderRadius: "5px",
              }}
            />
          </Modal>
        )}
      </main>
    </>
  );
}

export default App;
