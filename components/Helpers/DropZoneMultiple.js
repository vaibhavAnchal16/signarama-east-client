import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { imageUploadMultiple } from "./ImageUpload";

export const DropZoneMultiple = ({ setFiles, text, setCheckLoading }) => {
  const [loading, setLoading] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    acceptedFiles: "",
    noClick: loading ? true : false,
    noKeyboard: true,
    multiple: true,
    onDrop: async (acceptedFiles) => {
      setLoading(true);
      setCheckLoading(true);
      let files = acceptedFiles.splice(0, 10);
      const url = await imageUploadMultiple(files, setFiles, "GALLERYIMAGES");
      setLoading(false);
      setCheckLoading(false);
    },
  });

  const imageName = (name) => {
    const _name = name.split("/").pop();
    return _name;
  };

  return (
    <>
      <div
        className="dropzonearea"
        {...getRootProps()}
        // style={{ backgroundImage: `url(${file?.preview})` }}
      >
        <input {...getInputProps()} />
        <div className="dropzonearea-inner">
          {/* <Image className="dropzoneimage" /> */}
          <p className="dropzonetext">
            {}
            {loading ? "Please wait.." : <>{text}, or Click to Browse</>}
          </p>
        </div>
      </div>
    </>
  );
};
