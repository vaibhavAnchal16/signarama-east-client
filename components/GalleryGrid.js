import LazyImage from "./LazyImage";

const GalleryGrid = ({ images }) => {
  return (
    <section className="images-gallery">
      <div className="images-gallery-inner">
        <div className="images-gallery-box">
          {images?.map((image, i) => (
            <div
              key={i}
              className="single-image"
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
