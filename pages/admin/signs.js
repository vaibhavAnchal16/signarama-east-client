import AdminLayout from "../../components/AdminLayout";

const Signs = () => {
  return <div>Signs</div>;
};
export default Signs;

Signs.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
