import React from "react";
import AdminLayout from "../../components/AdminLayout";
export default function Slider() {
  return <div> Slider</div>;
}

Slider.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
