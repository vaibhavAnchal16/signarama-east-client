import { useState } from "react";
import { useDropzone } from "react-dropzone";

export const DropZone = ({ file, setFile, text, types, setBlockSubmit }) => {
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
      console.log(file);
      // const { data, error, loading } = await fileupload({
      //   variables: {
      //     file,
      //   },
      // });
      // setLoading(loading);
      // if (error) {
      //   toast.error(error?.message);
      //   setFile({
      //     ...file,
      //     error: error?.message,
      //   });
      //   setLoading(loading);
      //   setBlockSubmit(false);
      // }
      // if (data?.singleUpload) {
      //   setFile({
      //     ...file,
      //     preview: data?.singleUpload?.fileurl,
      //     error: null,
      //   });
      //   setLoading(loading);
      //   setBlockSubmit(false);
      // }
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
