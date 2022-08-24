import { Layout } from "../components";

const Signs = () => {
  return <div> Signs page</div>;
};
export default Signs;

Signs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
