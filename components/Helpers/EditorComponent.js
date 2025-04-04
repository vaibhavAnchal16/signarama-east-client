import ClassicEditor from "ckeditor5-build-classic-nextjs";
import CKEditor from "@ckeditor/ckeditor5-react";

const EditorComponent = (props) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={props.value}
      onChange={(event, editor) => {
        const data = editor.getData();
        props.onChange(data);
      }}
    />
  );
};

export default EditorComponent;
