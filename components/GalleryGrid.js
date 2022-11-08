import { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const GalleryGrid = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <section className="images-gallery">
      <div className="images-gallery-inner">
        <div className="images-gallery-box">
          {images?.map((image, i) => (
            <div
              key={i}
              onClick={() => openImageViewer(i)}
              className="single-image"
              // style={{
              //   backgroundImage: `url(${image})`,
              // }}
            >
              <img src={image} alt="gallery" />
            </div>
          ))}
        </div>
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </section>
  );
};

export default GalleryGrid;
