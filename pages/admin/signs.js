import { useEffect, useRef, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { DropZone } from "../../components/Helpers/DropZone";
import { useMutation, useQuery } from "@apollo/client";
import { CREATESIGN, UPDATESIGN } from "../../graphql/mutations";
import Select from "react-select";
import { GALLERYIDS, SIGNS } from "../../graphql/queries";
import DataTable from "react-data-table-component";
import MyUploadAdapter from "../../components/Helpers/MyUploadAdapter";
import { SignTypes } from "../../components/Helpers/StaticData";
import Button from "../../components/Button/Button";

const Signs = () => {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor, HtmlEmbed } = editorRef.current || {};
  const [action, setAction] = useState(null);
  const [blockRichText, setBlockRichText] = useState(true);
  const [signTypeSelected, setSignTypeSelected] = useState("");
  const [description, setDescription] = useState("");
  const [gallerySelected, setGallerySelected] = useState(null);
  const [createsign] = useMutation(CREATESIGN);
  const [updatesign] = useMutation(UPDATESIGN);
  const [page, setPage] = useState(null);
  const [filters, setFilters] = useState({});

  const [image, setImage] = useState({
    preview: null,
  });
  const size = null;

  const { data, loading, refetch } = useQuery(SIGNS, {
    variables: {
      page,
      size,
      filters,
    },
  });

  const galleries = useQuery(GALLERYIDS, {
    page: null,
    size: null,
  });

  const resetForm = () => {
    setAction(null);
    setGallerySelected(null);
    setSignTypeSelected("");
    setImage({
      preview: null,
    });
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

  const custom_config = {
    extraPlugins: [MyCustomUploadAdapterPlugin],
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "|",
        "blockQuote",
        "insertTable",
        "|",
        "imageUpload",
        "undo",
        "redo",
      ],
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
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
            setSignTypeSelected(row?.type);
            setDescription(row?.description);
            if (row?.gallery) {
              setGallerySelected({
                label: row?.gallery?.title,
                value: row?.gallery?._id,
              });
            }
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
                  type: signTypeSelected,
                  featuredImage: image?.preview,
                  seoData: {
                    seoTitle: input.seoTitle.value,
                    seoDescription: input.seoDescription.value,
                    seoType: input.seoType.value,
                    seoTags: input.seoTags.value,
                    structuredData: input.structuredData.value,
                  },
                  gallery: gallerySelected?.value,
                };

                if (action?.module === "add") {
                  try {
                    const { data } = await createsign({
                      variables: {
                        ...inputValues,
                      },
                    });
                    if (data) {
                      resetForm();
                      refetch();
                    }
                  } catch (error) {
                    console.log(error);
                  }
                }
                if (action?.module === "edit") {
                  try {
                    const { data } = await updatesign({
                      variables: {
                        id: action?.data?._id,
                        ...inputValues,
                      },
                    });
                    if (data) {
                      resetForm();
                      refetch();
                    }
                  } catch (error) {
                    console.log(error);
                  }
                }
              }}
            >
              <div className="modal-form-header">
                <h2> {action?.module === "add" ? `New` : `Edit`} Sign</h2>
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
                            <textarea
                              defaultValue={description}
                              onChange={(e) => {
                                setDescription(e.currentTarget.value);
                              }}
                            />
                          </>
                        )}
                      </>
                    ) : (
                      "loading..."
                    )}
                    <button
                      type="button"
                      onClick={(_) => setBlockRichText(!blockRichText)}
                    >
                      {" "}
                      {blockRichText ? `Show Html` : `Show Advanced Editor`}
                    </button>
                  </div>
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
                  <label> Select Image Gallery</label>

                  <Select
                    options={galleries?.data?.galleries?.galleries?.map(
                      (gallery) => {
                        return {
                          label: gallery?.title,
                          value: gallery?._id,
                        };
                      }
                    )}
                    value={gallerySelected}
                    onChange={(_) => setGallerySelected(_)}
                    placeholder="Select Image Gallery"
                    className="custom-select"
                  />
                </div>

                <div className="fields-wrapper">
                  <label> Type of Sign</label>

                  <div className="signtypesselector">
                    {SignTypes?.map((sign, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`${
                          sign === signTypeSelected ? `active` : ``
                        }`}
                        onClick={(e) => {
                          setSignTypeSelected(sign);
                        }}
                      >
                        {" "}
                        {sign}{" "}
                      </button>
                    ))}
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
                <button type="submit">
                  {" "}
                  {action?.module === "add" ? `Save` : `Update`}{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="cta-headers d-flex d-flex-end">
        <Button
          type={`outline d-margin-b`}
          onClick={(_) =>
            setAction({
              module: "add",
            })
          }
        >
          {" "}
          Add Sign
        </Button>
      </div>
      <div>
        <DataTable data={data?.signs?.signs} columns={columns} />
      </div>
    </div>
  );
};
export default Signs;

Signs.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
