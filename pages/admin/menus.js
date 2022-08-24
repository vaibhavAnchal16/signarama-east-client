import AdminLayout from "../../components/AdminLayout";

const Menus = () => {
  return <div>Menus</div>;
};
export default Menus;

Menus.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
