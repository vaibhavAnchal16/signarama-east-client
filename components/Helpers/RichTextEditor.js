import React, { Component, useState } from "react";
import { EditorState } from "draft-js";
import dynamic from "next/dynamic";
import { convertFromRaw, convertToRaw } from "draft-js";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichTextEditor = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    props.handleContent(convertToRaw(editorState.getCurrentContent()));
  };

  const uploadImageCallBack = async (file) => {
    console.log("HEYA", file);
    const filename =
      file?.name.split(".").slice(0, -1).join(".") + new Date().valueOf();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
    formData.append("folder", "BLOGSIMAGES");
    formData.append("public_id", filename);
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/image/upload`;
    try {
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        body: formData, // body data type must match "Content-Type" header
      });
      const data = await response.json();
      return {
        data: {
          link: data?.secure_url,
        },
      };
    } catch (error) {
      return error;
    }

    // const imgData = await apiClient.uploadInlineImageForArticle(file);
    // return Promise.resolve({ data: {
    //   link: `${process.env.NEXT_PUBLIC_API_URL}${imgData[0].formats.small.url}`
    // }});
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbar-class"
        wrapperClassName="custom-editor"
        editorClassName="editor-class"
        onEditorStateChange={onEditorStateChange}
        // toolbarOnFocus
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            // "fontFamily",
            "list",
            // "textAlign",
            // "colorPicker",
            "link",
            // "embedded",
            // "emoji",
            "image",
            // "history",
          ],
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: {
            urlEnabled: true,
            uploadEnabled: true,
            uploadCallback: uploadImageCallBack,
            previewImage: true,
            alt: { present: false, mandatory: false },
          },
        }}
      />
    </div>
  );
};

export default RichTextEditor;
