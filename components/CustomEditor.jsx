import React, { useEffect, useRef, useState } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import { ClassicEditor } from "ckeditor5-build-classic-nextjs";
import MyUploadAdapter from "./Helpers/MyUploadAdapter";
import { Colors } from "./Helpers/Colors";

export default function CustomEditor({ initialData = "", onChange }) {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("ckeditor5-build-classic-nextjs"),
    };
    setEditorLoaded(true);
  }, []);

  const MyCustomUploadAdapterPlugin = (editor) => {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return new MyUploadAdapter(loader);
    };
  };
  const custom_config = {
    // plugins: [PasteFromOffice],
    extraPlugins: [MyCustomUploadAdapterPlugin],
    toolbar: [
      "heading",
      "alignment",
      "|",
      "fontColor",
      "fontBackgroundColor",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "bulletedList",
      "numberedList",
      "unorderedList",
      "orderedList",
      "|",
      "outdent",
      "indent",
      "|",
      "link",
      "blockQuote",
      "imageUpload",
      "ImageTextAlternative",
      "mediaEmbed",
      "undo",
      "redo",
    ],
    fontColor: {
      colors: Colors.map((color) => ({
        color,
        label: color,
      })),
      columns: 6, // Optional: How many color boxes in one row
    },
    pasteFromOffice: {
      keepFormatting: true, // This will enable Paste from Office
    },
    mediaEmbed: {
      previewsInData: true,
    },
    language: "en",
  };
  if (!editorLoaded) return <p>Editor Loading...</p>;
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        config={custom_config}
        data={initialData}
        onBlur={(_, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
        // onBlur={(_, editor) => setData(editor.getData())}
      />
    </div>
  );
}
