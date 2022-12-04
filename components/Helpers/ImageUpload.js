export const imageUpload = async (file, folder) => {
  const filename =
    file?.name.split(".").slice(0, -1).join(".") + new Date().valueOf();
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
  formData.append("folder", folder || process.env.NEXT_PUBLIC_UPLOAD_FOLDER);
  formData.append("public_id", filename);
  const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/image/upload`;
  try {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: formData, // body data type must match "Content-Type" header
    });
    const data = await response.json();
    return data?.secure_url;
  } catch (error) {
    return error;
  }
};

export const imageUploadMultiple = async (files, setFiles, folder) => {
  for await (const file of files) {
    const filename =
      file?.name.split(".").slice(0, -1).join(".") + new Date().valueOf();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
    formData.append("folder", folder || process.env.NEXT_PUBLIC_UPLOAD_FOLDER);
    formData.append("public_id", filename);
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/image/upload`;
    try {
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        body: formData, // body data type must match "Content-Type" header
      });
      const data = await response.json();
      console.log(data.secure_url);
      setFiles((_) => [data?.secure_url, ..._]);
    } catch (error) {
      return error;
    }
  }
};
