import React, { useState } from "react";
import { EditorState } from "draft-js";
import createImagePlugin from "@draft-js-plugins/image";
import dynamic from "next/dynamic";
// import { convertFromRaw, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { imageUpload } from "./ImageUpload";
import { convertToHTML } from "draft-convert";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
const imagePlugin = createImagePlugin();

const RichTextEditor = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const currentContentAsHTML = convertToHTML({
    entityToHTML: (entity, originalText) => {
      if (entity.type === "IMAGE") {
        return `<img src="${entity.data.src}" />`;
      }
      return originalText;
    },
  })(editorState.getCurrentContent());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    props.handleContent(currentContentAsHTML);
  };

  const uploadImageCallBack = async (file) => {
    const url = await imageUpload(file, "BLOGSIMAGES");
    return {
      data: {
        link: url,
      },
    };
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
        plugins={[imagePlugin]}
      />
    </div>
  );
};

export default RichTextEditor;
