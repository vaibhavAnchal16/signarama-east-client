import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { imageUpload } from "./ImageUpload";

export const DropZone = ({
  file,
  setFile,
  text,
  types,
  setBlockSubmit,
  folder,
}) => {
  const [loading, setLoading] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    acceptedFiles: "",
    noClick: file?.preview ?? false,
    noKeyboard: true,
    multiple: false,
    onDrop: async (acceptedFiles) => {
      setLoading(true);
      const file = acceptedFiles[0];
      if (
        !types.includes(
          file.type.replace("image/", "").replace("application/", "")
        )
      ) {
        //   toast.error("Please upload valid image jpg/png");
        setFile({
          ...file,
          error: "Please upload valid image jpg/png",
        });
        //   setBlockSubmit(false);
        return;
      }

      const url = await imageUpload(file, "BLOGSIMAGES");
      setFile({
        preview: url,
      });
      setLoading(false);
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
        <div className="dropzonepreview">
          <img src={file?.preview ?? ""} />
        </div>
      </div>
      {file?.preview && (
        <div className="removedropfile">
          <span>
            {imageName(file.preview)}
            <span
              className="removeicon"
              onClick={(_) => {
                setFile({
                  preview: null,
                  path: null,
                  error: null,
                });
              }}
            >
              {/* <CrossIcon /> */}
            </span>
          </span>
        </div>
      )}
      {file?.error && <div className="dropzoneerror"> {file.error}</div>}
    </>
  );
};
