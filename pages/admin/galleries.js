import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { useMutation, useQuery } from "@apollo/client";
import { CREATEGALLERY, UPDATEGALLERY } from "../../graphql/mutations";
import { GALLERIES } from "../../graphql/queries";
import DataTable from "react-data-table-component";
import { DropZoneMultiple } from "../../components/Helpers/DropZoneMultiple";
import { Trash } from "../../components/Helpers/Icons";

const Galleries = () => {
  const [action, setAction] = useState(null);
  const [description, setDescription] = useState("");
  const [creategallery] = useMutation(CREATEGALLERY);
  const [updategallery] = useMutation(UPDATEGALLERY);
  const [page, setPage] = useState(1);
  const [checkLoading, setCheckLoading] = useState(false);
  const [images, setImages] = useState([]);
  const size = 20;

  const { data, loading, refetch } = useQuery(GALLERIES, {
    page: null,
    size: null,
  });

  const resetForm = () => {
    setAction(null);
    setImages([]);
  };

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Actions",
      cell: (row) => (
        <button
          onClick={(e) => {
            setAction({
              module: "edit",
              data: {
                ...row,
              },
            });
            setImages(row?.images);
          }}
        >
          Edit{" "}
        </button>
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
                  description,
                  images,
                };

                if (action?.module === "add") {
                  try {
                    const { data } = await creategallery({
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
                    const { data } = await updategallery({
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
                <h2> {action?.module === "add" ? `New` : `Edit`} Gallery</h2>
              </div>

              <div className="form-data">
                <div className="fields-wrapper">
                  <label> Title</label>
                  <input
                    placeholder="Title"
                    name="title"
                    defaultValue={action?.data?.title ?? ""}
                  />
                </div>

                <div className="fields-wrapper">
                  <label> Description</label>
                  <textarea
                    name="description"
                    defaultValue={action?.data?.description ?? ""}
                  />
                </div>

                <div className="fields-wrapper">
                  <DropZoneMultiple
                    text="Drop Gallery Images (maximum 10 at once)"
                    files={images}
                    setFiles={setImages}
                    types={["jpeg", "png", "jpg"]}
                    setCheckLoading={setCheckLoading}
                  />
                </div>

                <div className="fields-wrapper">
                  <div className="images-preview-form">
                    {images?.map((url, i) => {
                      return (
                        <div className="images-preview-form-wrapper" key={i}>
                          <span
                            onClick={(e) => {
                              setImages((files) => {
                                return files.filter((a, index) => i !== index);
                              });
                            }}
                          >
                            {" "}
                            <Trash />{" "}
                          </span>
                          <img src={url} key={i} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="modal-form-footer">
                <button type="button" onClick={(e) => resetForm()}>
                  {" "}
                  Cancel
                </button>{" "}
                <button type="submit" disabled={checkLoading ? true : false}>
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
          Add Gallery
        </button>
      </div>
      <div>
        <DataTable data={data?.galleries?.galleries} columns={columns} />
      </div>
    </div>
  );
};
export default Galleries;

Galleries.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
