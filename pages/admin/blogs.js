import { useEffect, useRef, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { DropZone } from "../../components/Helpers/DropZone";
import { useMutation, useQuery } from "@apollo/client";
import { CREATEBLOG, REMOVEBLOG, UPDATEBLOG } from "../../graphql/mutations";
import { BLOGS } from "../../graphql/queries";
import DataTable from "react-data-table-component";
import MyUploadAdapter from "../../components/Helpers/MyUploadAdapter";
import { Colors } from "../../components/Helpers/Colors";
import Button from "../../components/Button/Button";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";

const Blogs = () => {
  const CustomEditor = dynamic(
    () => import("./../../components/CustomEditor"),
    { ssr: false }
  );

  const [action, setAction] = useState(null);
  const [blockRichText, setBlockRichText] = useState(true);
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(true);
  const [trending, setTrending] = useState(false);
  const [recentWork, setRecentWork] = useState(false);
  const [createblog] = useMutation(CREATEBLOG);
  const [removeblogentry] = useMutation(REMOVEBLOG);
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
        <>
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
          <Button
            type={`fill`}
            style={{
              padding: "5px 10px",
              maxWidth: "fit-content",
              fontSize: "12px",
            }}
            onClick={async (e) => {
              if (confirm("Are you sure you want to delete this blog?")) {
                await removeblogentry({
                  variables: {
                    id: row._id,
                  },
                });
                toast.success("Blog Deleted");
                refetch();
              }
            }}
          >
            Delete
          </Button>
        </>
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
                      toast.success("Blog Created");
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
                      toast.success("Blog Updated");
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
                    {blockRichText ? (
                      <CustomEditor
                        onChange={(data) => setDescription(data)}
                        initialData={description}
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
                      Add to Success Stories
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
