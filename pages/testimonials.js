import { Layout } from "../components";

const Testimonials = () => {
  return <div> Testimonials</div>;
};

export default Testimonials;

Testimonials.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
