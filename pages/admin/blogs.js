import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { DropZone } from "../../components/Helpers/DropZone";
import RichTextEditor from "../../components/Helpers/RichTextEditor";
import { convertToHTML } from "draft-convert";
import { useMutation } from "@apollo/client";
import { CREATEBLOG } from "../../graphql/mutations";
import { convertToRaw } from "draft-js";

const Blogs = () => {
  const [action, setAction] = useState(null);
  const [value, setValue] = useState("");
  const [body, setBody] = useState("");
  const [createblog] = useMutation(CREATEBLOG);
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
              onSubmit={async (e) => {
                e.preventDefault();
                const input = e.target;
                if (input.title.value.trim() == "") {
                  input.title.style = "border: 1px solid red";
                  return;
                }
                const inputValues = {
                  title: input.title.value.trim(),
                  description: body,
                  featuredImage: image?.preview,
                  seoData: {
                    seoTitle: input.seoTitle.value,
                    seoDescription: input.seoDescription.value,
                    seoType: input.seoType.value,
                    seoTags: input.seoTags.value,
                    structuredData: input.structuredData.value,
                  },
                };
                try {
                  const { data } = await createblog({
                    variables: {
                      ...inputValues,
                    },
                  });
                  if (data) {
                    resetForm();
                  }
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <div className="modal-form-header">
                <h2> {action?.module === "add" ? `New` : `Edit`} Blog</h2>
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
          Add Blog
        </button>
      </div>

      <div className="admin-content">
        <div></div>
      </div>
    </div>
  );
};
export default Blogs;

Blogs.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
