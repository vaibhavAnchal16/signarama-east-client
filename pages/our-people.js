import { Layout } from "../components";

const OurPeople = () => {
  return <div> Our people</div>;
};
export default OurPeople;

OurPeople.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
