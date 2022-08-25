import { BiSearchAlt } from "react-icons/bi";
import client from "../apollo-client";
import { BlogCard, Layout } from "../components";
import { BLOGS } from "../graphql/queries";
const SignBlog = ({ blogs }) => {
  return (
    <>
      <section className="sign-blogs-search-wrapper">
        <section className="sign-blogs-search-inner">
          <div className="section-heading">
            <h1 style={{ textAlign: "center", maxWidth: "100%" }}>
              Blogs & <span className="highlighted">Stories </span>
            </h1>
            <p>
              {" "}
              Some of our Clients include Delta Hotels, Fairmount Hotels, YMCA,
              CBRE, Triovest, SNC Lavalin and list goes on...
            </p>
          </div>
          <form className="blog-search">
            <div className="fields-wrapper fields-flex search">
              <input type="text" placeholder="Search Signarama Blogs.." />
              <button>
                {" "}
                <BiSearchAlt />
              </button>
            </div>
          </form>
        </section>
      </section>
      <section className="sign-blogs-wrapper">
        <section className="sign-blogs-inner">
          {blogs?.map((blg, i) => (
            <BlogCard key={i} title={blg?.title} image={blg?.image} />
          ))}
        </section>
      </section>
    </>
  );
};
// This also gets called at build time
export async function getStaticProps({ params, query }) {
  const blogs = [
    {
      title: "Instacart Gets Their New Head Office Sign From Signarama Toronto",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2022/07/20220627_130754.jpg",
    },
    {
      title: "Signarama Toronto Makes Signs For Coca Cola At Calgary Stampede",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2022/07/image0.jpg",
    },
    {
      title:
        "“Something In The Water Brewing” Gets Their New Signs From Signarama Toronto",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2022/06/image1-min.jpeg",
    },
    {
      title:
        "Sandbox VR Opens New Location In Toronto With Help From Signarama Toronto",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2022/04/image0-min.jpeg",
    },
    {
      title:
        "Signarama Toronto Makes Wall Graphics For Northeastern University of Boston",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2022/03/20220228_131407-min.jpg",
    },
    {
      title: "Signarama Toronto Makes Signs For The Medi Collective",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2022/03/20211203_160313_resized_1.jpg",
    },
    {
      title: "Signarama Toronto Makes Signs For 1 Hotel In Toronto",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/08/IMG-5810.jpg",
    },
    {
      title: "Signarama Toronto- Your Sign Installation Experts",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2022/01/IMG_9447.jpg",
    },
    {
      title:
        "Signarama Toronto Is A Preferred Signage Partner For Mary Brown’s",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/12/IMG_8426-min.jpg",
    },
    {
      title:
        "Signarama Toronto- Your One Stop Solution For Architectural Signs",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/12/IMG_4989-min.jpg",
    },
    {
      title: "Long time Customer F45 Gets New Signs From Signarama Toronto",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/11/IMG_8194.jpg",
    },
    {
      title: "Mori Sushi Got Their New Signs From Signarama Toronto",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/11/IMG_7978-min.jpg",
    },
    {
      title: "Signarama Toronto Makes New Signs For Home Alive Pets",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/10/image.jpg",
    },
    {
      title:
        "Aritzia Vaughan Trusts Signarama Toronto For Their New 300ft Long Sign",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/10/image2-min.jpeg",
    },
    {
      title: "Fresh City Farms Gets Their New Signs From Signarama Toronto",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/10/20211005_180221.jpg",
    },
    {
      title:
        "FIKA Rolls Out 12 stores With The Help Of &nbsp;Sign A Rama Toronto",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/10/IMG_6227_jpg.jpg",
    },
    {
      title: "Signs At Night- Illuminating Your Business",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/09/image1-1.jpeg",
    },
    {
      title: "Brand Variations For ReMax Storefront Signs",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/09/IMG_8155.jpg",
    },
    {
      title:
        "Remax/Linda Pinizzotto Group Gets Their New Signs From Signarama Toronto",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/07/image0-min.jpeg",
    },
    {
      title: "Signarama Toronto Makes New Signs For FIKA Herbal Goods",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/07/image0-rotated.jpeg",
    },
    {
      title:
        "Signarama Toronto- One-Stop Shop For All Your Window Graphic Needs!",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/06/Club-Monaco-Store-front-2-min.jpg",
    },
    {
      title:
        "Signarama Toronto- High Rooftop Sign Installation Experts In Toronto",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/05/image-min.jpg",
    },
    {
      title:
        "Sign A Rama Toronto Makes Dimensional Letter Signs For Hoopdriver Bicycles",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/03/image1-1.jpeg",
    },
    {
      title: "Yorkville Retailers love Sign A Rama Toronto",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/03/IMG_2003.jpg",
    },
    {
      title:
        "Ambrosia Cannabis Gets Their New Channel Letters From Signarama Toronto",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/03/image-1.jpg",
    },
    {
      title: "Sign A Rama Toronto Makes Dimensional Letter Signs For Veri Wipe",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/02/image0.jpeg",
    },
    {
      title: "Brioche Dorée Trusts Signarama Toronto With Their New Signs",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/02/image8.jpeg",
    },
    {
      title: "Billboard Advertising- A Look Into The Past",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/02/IMG_9463.jpg",
    },
    {
      title: "Signarama Toronto Makes Channel Letter Signs For Rudy",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2021/01/Rudy.jpeg",
    },
    {
      title:
        "Need New Signs For A Historic Building? Signarama Toronto Can Help!",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2020/11/IMG_9627-min.jpg",
    },
    {
      title:
        "Signarama Toronto Creates Beautiful Signs For The Historic Parkdale Hall",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2020/11/image10-min.jpeg",
    },
    {
      title: "Signarama Toronto Helps RatesDotCa In Rebranding Of Their Office",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2020/10/image4-min.jpeg",
    },
    {
      title: "Happy HalloNeon Everyone!",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2020/10/IMG_9003-min.jpg",
    },
    {
      title: "Signarama Toronto Produces Interior Signs For Walmart",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2020/10/Walmart.jpg",
    },
    {
      title: "How to Wrap Up A Store Like A Pro- The Signarama Toronto Way!",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2020/10/IMG_8378-min.jpg",
    },
    {
      title: "Roberts Gallery Chooses Signarama Toronto For Their New Signs",
      image:
        "https://signarama-toronto.ca/wp-content/uploads/2020/10/image0-3-min.jpeg",
    },
  ];
  // const { data } = await client.query({
  //   query: BLOGS,
  //   variables: {
  //     page: query?.page ? Number(query.page) : 1,
  //     size: 12,
  //   },
  // });

  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // const res = await fetch(`https://.../posts/${params.id}`);
  // const post = await res.json();

  // Pass post data to the page via props
  return { props: { blogs } };
}

export default SignBlog;

SignBlog.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
