import AdminLayout from "../../components/AdminLayout";
import { useEffect, useState } from "react";
import { DropZone } from "../../components/Helpers/DropZone";
import RichTextEditor from "../../components/Helpers/RichTextEditor";

const Signs = () => {
  const [action, setAction] = useState(null);
  const [value, setValue] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState({
    preview: null,
  });
  const resetForm = () => {
    setAction(null);
  };

  useEffect(() => {
    document.querySelectorAll("input").forEach((el) => {
      el.addEventListener("focus", function (e) {
        e.currentTarget.style = "";
      });
    });
  }, [action]);

  const handleEditorContent = (content) => {
    setBody(content);
  };

  return (
    <div>
      {action && (
        <div className="modal-form-wrapper ">
          <div className="modal-form-inner">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.target;
                if (input.title.value.trim() == "") {
                  input.title.style = "border: 1px solid red";
                  return;
                }

                const SignValues = {
                  title: input.title.value.trim(),
                  description: body,
                  seo: {
                    seoTitle: input.seoTitle.value,
                    seoDescription: input.seoDescription.value,
                    seoType: input.seoType.value,
                    seoTags: input.seoTags.value,
                    structuredData: input.structuredData.value,
                  },
                };
                resetForm();
                console.log(SignValues);
              }}
            >
              <div className="modal-form-header">
                <h2> {action?.module === "add" ? `New` : `Edit`} Sign</h2>
              </div>

              <div className="form-data">
                <div className="fields-wrapper">
                  <label> Title</label>
                  <input placeholder="Title" name="title" />
                </div>

                <div className="fields-wrapper">
                  <label> Description</label>
                  <RichTextEditor handleContent={handleEditorContent} />
                </div>

                <div className="fields-wrapper">
                  <DropZone
                    text="Drop Featured Image"
                    file={image}
                    setFile={setImage}
                    types={["jpeg", "png", "jpg"]}
                  />
                </div>

                {/* title,description,type,tags*/}
                <div className="form-inner-headings">
                  <h2> SEO Data</h2>
                </div>

                <div className="fields-wrapper">
                  <label> Seo Title</label>
                  <input placeholder="Seo Title" name="seoTitle" />
                </div>

                <div className="fields-wrapper">
                  <label> Seo Description</label>
                  <input placeholder="Seo Description" name="seoDescription" />
                </div>
                <div className="fields-wrapper">
                  <label> Seo Type</label>
                  <input placeholder="Seo Type" name="seoType" />
                </div>
                <div className="fields-wrapper">
                  <label> Seo Tags</label>
                  <input placeholder="Seo Tags" name="seoTags" />
                </div>
                <div className="fields-wrapper">
                  <label> Structured Data</label>
                  <textarea
                    placeholder="Structured Data"
                    name="structuredData"
                  />
                </div>
              </div>

              <div className="modal-form-footer">
                <button type="button" onClick={(e) => resetForm()}>
                  {" "}
                  Cancel
                </button>{" "}
                <button type="submit">
                  {" "}
                  {action?.module === "add" ? `Save` : `Update`}{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="cta-headers">
        <button
          onClick={(_) =>
            setAction({
              module: "add",
            })
          }
        >
          {" "}
          Add Signs
        </button>
      </div>

      <div className="admin-content">
        <div></div>
      </div>
    </div>
  );
};
export default Signs;

Signs.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
