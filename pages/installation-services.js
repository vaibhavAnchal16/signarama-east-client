import { Layout } from "../components";

const InstallationServices = () => {
  return <div> Yes</div>;
};
export default InstallationServices;

InstallationServices.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
