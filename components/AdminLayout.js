import { ApolloProvider } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import client from "../apollo-client";
import { MYPROFILE } from "../graphql/queries";
import { ToastContainer } from "react-toastify";
import Link from "next/link";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await client.query({
          query: MYPROFILE,
        });
        setUser(data?.myProfile);
      } catch (error) {
        router.push("/login");
      }

      // setRecentBlogs({
      //   loading,
      //   blogs: data?.blogs?.blogs,
      //   error,
      // });
    })();
  }, []);

  const routes = [
    {
      name: "Dashboard",
      link: "/admin/dashboard",
    },
    {
      name: "Hero Slider",
      link: "/admin/slider",
    },
    {
      name: "Manage Sign Pages",
      link: "/admin/signs",
    },
    {
      name: "Manage Blogs",
      link: "/admin/blogs",
    },
    {
      name: "Image Galleries",
      link: "/admin/galleries",
    },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      router.push(href);
    }
  };

  if (typeof window === undefined) return <>Loading...</>;
  return (
    <ApolloProvider client={client}>
      <ToastContainer />
      <section className="admin-template-wrapper" id="adminlayout">
        <div className="admin-template-inner">
          <div className="admin-side-bar">
            <div className="admin-side-float">
              <ul>
                {routes?.map((route, i) => (
                  <li
                    key={i}
                    className={router.pathname === route?.link ? `active` : ``}
                  >
                    {" "}
                    <Link
                      style={{
                        textDecoration: "none",
                        display: "block",
                      }}
                      href={route?.link}
                    >
                      <span>{route?.name}</span>
                    </Link>{" "}
                  </li>
                ))}
              </ul>
              <div className="footer-admin-links">
                <span>
                  {" "}
                  Hey {user?.name},{" "}
                  <button
                    className=""
                    type="button"
                    onClick={(e) => {
                      localStorage.removeItem("signarama_token");
                      router.push("/login");
                    }}
                  >
                    {" "}
                    Logout
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="admin-content">
            <main>{children}</main>
          </div>
        </div>
      </section>
    </ApolloProvider>
  );
}
