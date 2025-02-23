import React, { useEffect } from "react";
import AdminLayout from "../../components/AdminLayout";
import { GALLERIESIDS, HEROGALLERY } from "../../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import Select from "react-select";
import Button from "../../components/Button/Button";
import { ADDUPDATEHEROGALLERY } from "../../graphql/mutations";
import { toast } from "react-toastify";
export default function Slider() {
  const { data, loading } = useQuery(GALLERIESIDS);
  const { data: heroGallery, refetch } = useQuery(HEROGALLERY);
  const [updateHeroGallery] = useMutation(ADDUPDATEHEROGALLERY);
  const [gallerySelected, setGallerySelected] = React.useState(null);

  useEffect(() => {
    if (heroGallery) {
      setGallerySelected({
        label: heroGallery?.heroGalleryImages?.gallery?.title,
        value: heroGallery?.heroGalleryImages?.gallery?._id,
      });
    }
  }, [heroGallery]);

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h3 className="d-margin-b">Select Gallery to Display on Hero Section:</h3>
      <form>
        <Select
          options={data?.galleries?.galleries?.map((gallery) => {
            return {
              label: gallery?.title,
              value: gallery?._id,
            };
          })}
          value={gallerySelected}
          onChange={(_) => setGallerySelected(_)}
          placeholder="Select Image Gallery"
          className="custom-select"
        />
        <div
          className="d-margin-t"
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={async (e) => {
              e.preventDefault();
              await updateHeroGallery({
                variables: {
                  gallery: gallerySelected?.value,
                },
              });
              refetch();
              toast.success("Gallery Updated");
            }}
          >
            {gallerySelected ? "Update" : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

Slider.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
