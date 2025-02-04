// Function to convert an image file to WebP
const convertToWebP = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Set canvas size
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Convert to WebP format
        canvas.toBlob(
          (blob) => {
            const webpFile = new File(
              [blob],
              file.name.replace(/\.\w+$/, ".webp"),
              {
                type: "image/webp",
              }
            );
            resolve(webpFile);
          },
          "image/webp",
          0.8
        ); // 80% quality for better balance
      };
    };
  });
};

export const imageUpload = async (file, folder) => {
  try {
    // Convert only PNG, JPG, and JPEG files to WebP before uploading
    const fileType = file.type;
    let processedFile = file;

    if (
      fileType === "image/png" ||
      fileType === "image/jpeg" ||
      fileType === "image/jpg"
    ) {
      processedFile = await convertToWebP(file);
    }

    // Generate unique filename
    const filename =
      processedFile.name.split(".").slice(0, -1).join(".") +
      new Date().valueOf();

    // Prepare FormData
    const formData = new FormData();
    formData.append("file", processedFile);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
    formData.append("folder", folder || process.env.NEXT_PUBLIC_UPLOAD_FOLDER);
    formData.append("public_id", filename);

    // Upload to Cloudinary
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/image/upload`;
    const response = await fetch(url, { method: "POST", body: formData });
    const data = await response.json();

    return data?.secure_url;
  } catch (error) {
    console.error("Upload error:", error);
    return error;
  }
};

export const imageUploadMultiple = async (files, setFiles, folder) => {
  // for await (const file of files) {
  //   const filename =
  //     file?.name.split(".").slice(0, -1).join(".") + new Date().valueOf();
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
  //   formData.append("folder", folder || process.env.NEXT_PUBLIC_UPLOAD_FOLDER);
  //   formData.append("public_id", filename);
  //   const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/image/upload`;
  //   try {
  //     const response = await fetch(url, {
  //       method: "POST", // *GET, POST, PUT, DELETE, etc.
  //       body: formData, // body data type must match "Content-Type" header
  //     });
  //     const data = await response.json();
  //     console.log(data.secure_url);
  //     setFiles((_) => [data?.secure_url, ..._]);
  //   } catch (error) {
  //     return error;
  //   }
  // }

  // NEW VERSION

  try {
    // Convert all images to WebP before uploading
    const webpFiles = await Promise.all(files.map(convertToWebP));

    const uploadPromises = webpFiles.map(async (file) => {
      const filename =
        file.name.split(".").slice(0, -1).join(".") + new Date().valueOf();

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
      formData.append(
        "folder",
        folder || process.env.NEXT_PUBLIC_UPLOAD_FOLDER
      );
      formData.append("public_id", filename);

      const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/image/upload`;

      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      return data?.secure_url;
    });

    // Wait for all uploads to complete
    const uploadedUrls = await Promise.all(uploadPromises);
    // Update state with uploaded images
    setFiles((prev) => [...uploadedUrls, ...prev]);
  } catch (error) {
    console.error("Upload error:", error);
    return error;
  }
};
