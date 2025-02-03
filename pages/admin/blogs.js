import { useEffect, useRef, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { DropZone } from "../../components/Helpers/DropZone";
import { useMutation, useQuery } from "@apollo/client";
import { CREATEBLOG, UPDATEBLOG } from "../../graphql/mutations";
import { BLOGS } from "../../graphql/queries";
import DataTable from "react-data-table-component";
import MyUploadAdapter from "../../components/Helpers/MyUploadAdapter";
import { Colors } from "../../components/Helpers/Colors";
import Button from "../../components/Button/Button";

const Blogs = () => {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor, HtmlEmbed } = editorRef.current || {};
  const [action, setAction] = useState(null);
  const [blockRichText, setBlockRichText] = useState(true);
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(true);
  const [trending, setTrending] = useState(false);
  const [recentWork, setRecentWork] = useState(false);
  const [createblog] = useMutation(CREATEBLOG);
  const [updateblog] = useMutation(UPDATEBLOG);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [formLoading, setFormLoading] = useState(false);
  const [image, setImage] = useState({
    preview: null,
  });
  const size = 20;

  const { data, loading, refetch } = useQuery(BLOGS, {
    variables: {
      page,
      size,
      filters,
    },
  });

  const resetForm = () => {
    setAction(null);
    setDescription("");
  };

  useEffect(() => {
    document.querySelectorAll("input").forEach((el) => {
      el.addEventListener("focus", function (e) {
        e.currentTarget.style = "";
      });
    });
  }, [action]);

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

  const pasteUploadImage = (editor) => {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return new MyUploadAdapter(loader);
    };
  };

  const custom_config = {
    // plugins: [ImageCaptionPlugin, ImageStylePlugin, ImageToolbarPlugin],
    extraPlugins: [MyCustomUploadAdapterPlugin, pasteUploadImage],
    fontColor: {
      colors: Colors.map((color) => {
        return {
          color,
        };
      }),
    },
    toolbar: {
      items: [
        "heading",
        "fontColor",
        "|",
        "bold",
        "color",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "|",
        "blockQuote",
        "insertTable",
        "|",
        "imageUpload",
        "ImageTextAlternative",
        "mediaEmbed",
        "undo",
        "redo",
      ],
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    },
    mediaEmbed: {
      previewsInData: true,
    },
  };

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Status",
      cell: (row) => <div>{row?.published ? `Published` : `Draft`}</div>,
    },
    {
      name: "Actions",
      cell: (row) => (
        <Button
          type={`outline`}
          style={{
            padding: "5px 10px",
            maxWidth: "fit-content",
            fontSize: "12px",
          }}
          onClick={(e) => {
            setAction({
              module: "edit",
              data: {
                ...row,
              },
            });
            setImage({
              preview: row?.featuredImage,
            });
            setPublished(row?.published);
            setRecentWork(row?.recentWork);
            setTrending(row?.trending);
            setDescription(row?.description);
          }}
        >
          Edit{" "}
        </Button>
      ),
    },
  ];
  if (loading) return "Please wait..";
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
                  description: description,
                  featuredImage: image?.preview,
                  seoData: {
                    seoTitle: input.seoTitle.value,
                    seoDescription: input.seoDescription.value,
                    seoType: input.seoType.value,
                    seoTags: input.seoTags.value,
                    structuredData: input.structuredData.value,
                  },
                  published,
                  trending,
                  recentWork,
                };
                setFormLoading(true);
                if (action?.module === "add") {
                  try {
                    const { data } = await createblog({
                      variables: {
                        ...inputValues,
                      },
                    });
                    if (data) {
                      resetForm();
                      refetch();
                      setFormLoading(false);
                    }
                  } catch (error) {
                    setFormLoading(false);
                    console.log(error);
                  }
                }
                if (action?.module === "edit") {
                  try {
                    const { data } = await updateblog({
                      variables: {
                        id: action?.data?._id,
                        ...inputValues,
                      },
                    });
                    if (data) {
                      resetForm();
                      refetch();
                      setFormLoading(false);
                    }
                  } catch (error) {
                    console.log(error);
                    setFormLoading(false);
                  }
                }
              }}
            >
              <div className="modal-form-header">
                <h2> {action?.module === "add" ? `New` : `Edit`} Blog</h2>
              </div>

              <div className="form-data">
                <div className="fields-wrapper">
                  <label> Title</label>
                  <input
                    placeholder="Title"
                    name="title"
                    defaultValue={action?.data?.title}
                  />
                </div>

                <div className="fields-wrapper">
                  <div className="rich-content-wrapper">
                    {editorLoaded ? (
                      <>
                        {blockRichText ? (
                          <CKEditor
                            editor={ClassicEditor}
                            config={custom_config}
                            className="mt-3 wrap-ckeditor"
                            data={description}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              setDescription(data);
                            }}
                          />
                        ) : (
                          <>
                            {" "}
                            <textarea defaultValue={description} />
                          </>
                        )}
                      </>
                    ) : (
                      "loading..."
                    )}
                  </div>
                </div>
                <div className="fields-wrapper">
                  <button
                    type="button"
                    onClick={(_) => setBlockRichText(!blockRichText)}
                  >
                    {" "}
                    {blockRichText ? `Show Html` : `Show Advanced Editor`}
                  </button>
                </div>

                <div className="fields-wrapper">
                  <DropZone
                    text="Drop Featured Image"
                    file={image}
                    setFile={setImage}
                    types={["jpeg", "png", "jpg"]}
                  />
                </div>
                <div className="fields-wrapper">
                  <div className="signtypesselector">
                    <button
                      onClick={(_) => setPublished(!published)}
                      type="button"
                      className={published ? `active` : ``}
                    >
                      {" "}
                      Published
                    </button>
                    <button
                      onClick={(_) => setTrending(!trending)}
                      type="button"
                      className={trending ? `active` : ``}
                    >
                      {" "}
                      Trending Story
                    </button>
                    <button
                      type="button"
                      onClick={(_) => setRecentWork(!recentWork)}
                      className={recentWork ? `active` : ``}
                    >
                      {" "}
                      Add to Featured Projects
                    </button>
                  </div>
                </div>

                {/* title,description,type,tags*/}
                <div className="form-inner-headings">
                  <h2> SEO Data</h2>
                </div>

                <div className="fields-wrapper">
                  <label> Seo Title</label>
                  <input
                    placeholder="Seo Title"
                    name="seoTitle"
                    defaultValue={action?.data?.seoData?.seoTitle ?? ""}
                  />
                </div>

                <div className="fields-wrapper">
                  <label> Seo Description</label>
                  <input
                    placeholder="Seo Description"
                    name="seoDescription"
                    defaultValue={action?.data?.seoData?.seoDescription ?? ""}
                  />
                </div>
                <div className="fields-wrapper">
                  <label> Seo Type</label>
                  <input
                    placeholder="Seo Type"
                    name="seoType"
                    defaultValue={action?.data?.seoData?.seoType ?? ""}
                  />
                </div>
                <div className="fields-wrapper">
                  <label> Seo Tags</label>
                  <input
                    placeholder="Seo Tags"
                    name="seoTags"
                    defaultValue={action?.data?.seoData?.seoTags ?? ""}
                  />
                </div>
                <div className="fields-wrapper">
                  <label> Structured Data</label>
                  <textarea
                    placeholder="Structured Data"
                    name="structuredData"
                    defaultValue={action?.data?.seoData?.structuredData ?? ""}
                  />
                </div>
              </div>

              <div className="modal-form-footer">
                <button type="button" onClick={(e) => resetForm()}>
                  {" "}
                  Cancel
                </button>{" "}
                <button type="submit" disabled={formLoading}>
                  {formLoading ? (
                    <> Please Wait....</>
                  ) : (
                    <>{action?.module === "add" ? `Save` : `Update`} </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="cta-headers d-flex d-flex-end d-margin-b">
        <Button
          type={`outline`}
          onClick={(_) =>
            setAction({
              module: "add",
            })
          }
        >
          {" "}
          Add Blog
        </Button>
      </div>
      <div>
        <DataTable data={data?.blogs?.blogs} columns={columns} />
      </div>
      <div className="pagination">
        {page > 1 && (
          <button
            onClick={(e) => {
              if (page > 1) {
                setPage((page) => page - 1);
              }
              // managePagination("decrement", page);
            }}
          >
            Previous
          </button>
        )}

        <button
          onClick={(e) => {
            setPage((page) => page + 1);
            // managePagination("increment", page);
          }}
        >
          {" "}
          Next
        </button>
      </div>
    </div>
  );
};
export default Blogs;

Blogs.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
