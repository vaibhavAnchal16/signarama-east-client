import { Layout } from "../components";

const SignaramaFaqs = () => {
  return <div> Faqs</div>;
};
export default SignaramaFaqs;

SignaramaFaqs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
