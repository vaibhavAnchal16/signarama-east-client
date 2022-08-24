import { Layout } from "../components";

const OurProcess = () => {
  return <div>Our process</div>;
};

export default OurProcess;

OurProcess.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
