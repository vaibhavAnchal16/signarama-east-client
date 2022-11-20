import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const LazyImage = (props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(props?.placeholder);
  console.log(props.src);
  useEffect(() => {
    // start loading original image
    if (props?.src) {
      const imageToLoad = new Image();
      imageToLoad.src = props?.src;
      imageToLoad.onload = () => {
        setLoading(false);
        updateSrc(props?.src);
      };
    } else {
      updateSrc(props?.placeholder);
    }
    return () => {
      setLoading(true);
    };
  }, [props]);

  return (
    <img
      onClick={(e) => {
        if (props?.link) {
          router.push(props?.link);
        }
        return;
      }}
      src={currentSrc}
      alt={props?.alt}
      style={{
        ...props?.style,
        opacity: loading && props?.src ? 0.3 : 1,
        transition: "all 0.3s linear",
      }}
    />
  );
};

export default LazyImage;
