import AdminLayout from "../../components/AdminLayout";

const Dashboard = () => {
  return <div>Dashboard</div>;
};
export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
