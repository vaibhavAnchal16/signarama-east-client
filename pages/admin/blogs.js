import AdminLayout from "../../components/AdminLayout";

const Blogs = () => {
  return <div>Blogs</div>;
};
export default Blogs;

Blogs.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
