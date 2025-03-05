import client from "../../apollo-client";
import sanitizeHtml from "sanitize-html";

import { LazyImage } from "../../components";
import { BLOG } from "../../graphql/queries";
import Head from "next/head";
import { useEffect } from "react";
import Button from "../../components/Button/Button";
import BlogLayout from "../../components/BlogLayout";

const Blog = ({ blog }) => {
  const createMarkup = (html) => {
    return {
      __html: sanitizeHtml(html, {
        // allowedTags: false,
        // allowedAttributes: false,
        exclusiveFilter: function (frame) {
          return (
            (frame.tag === "p" && !frame.text.trim()) || frame.tag === "script"
          );
        },
      }),
    };
  };

  function getId(url) {
    var regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return "error";
    }
  }

  useEffect(() => {
    const checkDescription = setInterval(function () {
      const blogdescsection = document.querySelector(".blog-description");
      if (blog && blogdescsection) {
        clearInterval(checkDescription);
        const tagsoemebeds = blogdescsection.querySelectorAll("oembed");
        tagsoemebeds.forEach((element) => {
          const iframeelement = document.createElement("div");
          const videoId = getId(element.getAttribute("url"));
          const srcforoembed = `//www.youtube.com/embed/${videoId}`;
          iframeelement.innerHTML = `<iframe id=${videoId} height="415" src=${srcforoembed} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
          if (!document.querySelector(`#${videoId}`)) {
            element.insertAdjacentHTML("afterend", iframeelement.innerHTML);
          }
        });
      }
    });
  }, [blog]);

  return (
    <>
      <Head>
        <title>{blog?.seoData?.seoTitle}</title>
        <meta name="description" content={blog?.seoData?.seoDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog?.title} />
        <meta
          property="og:description"
          content={blog?.seoData?.seoDescription}
        />
        <meta
          property="og:url"
          content={`https://signarama-bramptonwest.ca/blog/${blog?.slug}`}
        />
        <meta property="og:image" content={blog?.featuredImage} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BlogPosting",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://signarama-bramptonwest.ca/blog/${blog?.slug}`,
            },
            headline: blog?.title,
            description: blog?.seoData?.seoDescription,
            image: {
              "@type": "ImageObject",
              url: blog?.featuredImage,
              width: "200",
              height: "200",
            },
            author: {
              "@type": "Organization",
              name: "Signarama Brampton",
            },
            publisher: {
              "@type": "Organization",
              name: "Signarama",
            },
            datePublished: blog?.createdAt,
            dateModified: blog?.updatedAt,
          })}
        </script>
      </Head>
      <div className="bg-white">
        <div className="wavepattern">
          <div className="howsewingworks services-outer-space">
            <div
              className="howsewingworks-inner d-padding-l d-padding-r d-padding-t"
              style={{
                alignItems: "flex-start",
              }}
            >
              <div className="services-outer-space-text l-margin-b d-column-gap">
                <h1 className="d-margin-b"> {blog?.title}</h1>
              </div>
              <div className="about-us-hero d-flex d-flex-wrap d-flex-between mx-80">
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <LazyImage
                    src={blog?.featuredImage}
                    // src={`https://res.cloudinary.com/signaramatoronto/image/upload/v1734299871/BLOGSIMAGES/LORO%20PIANA%20X%20SAR-11734299869649.jpg`}
                    style={{
                      maxWidth: "100%",
                      width: "100%",
                      borderRadius: "10px",
                      maxHeight: "500px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero-outer-space bg-white about-us sign-ind-page"
        style={{
          background: "#fff",
        }}
      >
        <div className="d-padding-l d-padding-r  mx-80">
          <div
            className="hero-inner-space d-flex d-flex-wrap d-flex-between d-margin-b"
            style={{
              alignItems: "flex-start",
            }}
          >
            <div
              className="hero-text full-width"
              style={{
                maxWidth: "100%",
              }}
            >
              <div
                className="serv-detail-text"
                dangerouslySetInnerHTML={createMarkup(blog?.description)}
              ></div>
              <div className="d-flex d-flex-center d-margin-t">
                <Button href={`/contact-us`} type="fill">
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="blog-details">
        <div className="blog-details-inner">
          <div className="blog-content-box">
            <h1 className="blog-title"> {blog?.title} </h1>
            <LazyImage
              src={blog?.featuredImage}
              alt={blog?.title}
              style={{
                width: "100%",
              }}
            />
            <div
              className="blog-description"
              dangerouslySetInnerHTML={createMarkup(blog?.description)}
            ></div>
            <div className="read-more-link">
              <Link href="/contact-us">Contact Us</Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const { data } = await client.query({
    query: BLOG,
    fetchPolicy: "network-only",
    variables: {
      slug,
    },
  });
  if (!data?.blog) {
    return {
      notFound: true,
    };
  }
  return { props: { blog: data?.blog } };
}

export default Blog;

Blog.getLayout = function getLayout(page) {
  return <BlogLayout>{page}</BlogLayout>;
};
