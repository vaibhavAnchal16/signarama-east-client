import { ApolloProvider, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import client from "../apollo-client";
import { MYPROFILE } from "../graphql/queries";

export default function AdminLayout({ children }) {
  const router = useRouter();

  const routes = [
    {
      name: "Dashboard",
      link: "/admin/dashboard",
    },
    {
      name: "Manage Menu",
      link: "/admin/menus",
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

  if (typeof window === undefined) return <>Hi</>;
  return (
    <ApolloProvider client={client}>
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
                    <span href={route?.link} onClick={handleClick}>
                      {" "}
                      {route?.name}{" "}
                    </span>{" "}
                  </li>
                ))}
              </ul>
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
