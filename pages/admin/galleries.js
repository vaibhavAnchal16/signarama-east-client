import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { useMutation, useQuery } from "@apollo/client";
import { CREATEGALLERY, UPDATEGALLERY } from "../../graphql/mutations";
import { GALLERIES } from "../../graphql/queries";
import DataTable from "react-data-table-component";
import { DropZoneMultiple } from "../../components/Helpers/DropZoneMultiple";
import { Trash } from "../../components/Helpers/Icons";
import Button from "../../components/Button/Button";
import { toast } from "react-toastify";

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
            setImages(row?.images);
          }}
        >
          Edit{" "}
        </Button>
      ),
    },
  ];

  function slist(target) {
    // (A) SET CSS + GET ALL LIST ITEMS
    target.classList.add("slist");
    let items = target.querySelectorAll(".images-preview-form-wrapper"),
      current = null;
    // (B) MAKE ITEMS DRAGGABLE + SORTABLE
    for (let i of items) {
      // (B1) ATTACH DRAGGABLE
      i.draggable = true;

      // (B2) DRAG START - YELLOW HIGHLIGHT DROPZONES
      i.ondragstart = (ev) => {
        current = i;
        for (let it of items) {
          if (it != current) {
            it.classList.add("hint");
          }
        }
      };

      // (B3) DRAG ENTER - RED HIGHLIGHT DROPZONE
      i.ondragenter = (ev) => {
        if (i != current) {
          i.classList.add("active");
        }
      };

      // (B4) DRAG LEAVE - REMOVE RED HIGHLIGHT
      i.ondragleave = () => {
        i.classList.remove("active");
      };

      // (B5) DRAG END - REMOVE ALL HIGHLIGHTS
      i.ondragend = () => {
        for (let it of items) {
          it.classList.remove("hint");
          it.classList.remove("active");
        }
      };

      // (B6) DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
      i.ondragover = (evt) => {
        evt.preventDefault();
      };

      // (B7) ON DROP - DO SOMETHING
      i.ondrop = (evt) => {
        evt.preventDefault();
        if (i != current) {
          let currentpos = 0,
            droppedpos = 0;
          for (let it = 0; it < items.length; it++) {
            if (current == items[it]) {
              currentpos = it;
            }
            if (i == items[it]) {
              droppedpos = it;
            }
          }
          if (currentpos < droppedpos) {
            i.parentNode.insertBefore(current, i.nextSibling);
          } else {
            i.parentNode.insertBefore(current, i);
          }
        }
      };
    }
  }

  useEffect(() => {
    if (action) {
      slist(document.getElementById("sortlist"));
    }
  }, [action]);

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
                const imagesdragged = document.querySelectorAll(
                  ".images-preview-form .images-preview-form-wrapper img"
                );
                const imageUrls = [...imagesdragged].map((el) =>
                  el.getAttribute("src")
                );
                const inputValues = {
                  title: input.title.value.trim(),
                  description,
                  images: imageUrls,
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
                      toast.success("Gallery created successfully");
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
                      toast.success("Gallery updated successfully");
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
                  <div className="images-preview-form" id="sortlist">
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
          Add Gallery
        </Button>
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
