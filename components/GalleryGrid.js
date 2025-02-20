import { useCallback, useState } from "react";
import { AspectRatio } from "react-aspect-ratio";
import ImageViewer from "react-simple-image-viewer";

const GalleryGrid = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
    document.querySelector(".header-wrapper.scrolled").style.zIndex = 0;
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
    document.querySelector(".header-wrapper.scrolled").style.zIndex = 2;
  };

  return (
    <section className="images-gallery d-margin-t d-margin-b">
      <div className="images-gallery-inner">
        <div className="images-gallery-box">
          {images?.map((image, i) => (
            <div
              key={i}
              // onClick={() => openImageViewer(i)}
              className="single-image"
            >
              <AspectRatio ratio="1 / 1" style={{ maxWidth: "400px" }}>
                <img
                  onClick={() => openImageViewer(i)}
                  src={image}
                  alt="gallery"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
      {isViewerOpen && (
        <div
        // style={{
        //   position: "relative",
        //   zIndex: 9999,
        // }}
        >
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;
