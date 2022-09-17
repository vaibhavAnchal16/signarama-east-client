import React, { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LazyImage from "./LazyImage";
import client from "../apollo-client";
import { SIGNS } from "../graphql/queries";

const Header = () => {
  const router = useRouter();
  const [signs, setSigns] = useState([]);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        let top = window.scrollY;
        if (top < 50) {
          document.querySelector(".header-wrapper") &&
            document
              .querySelector(".header-wrapper")
              .classList.remove("scrolled");
        } else {
          document.querySelector(".header-wrapper") &&
            document.querySelector(".header-wrapper").classList.add("scrolled");
        }

        if (top < 250) {
          document.querySelector("body").classList.remove("branding");
        } else {
          document.querySelector("body").classList.add("branding");
        }
      },
      false
    );
  });

  useEffect(() => {
    (async () => {
      const { data } = await client.query({
        query: SIGNS,
        variables: {
          page: null,
          size: null,
          filters: null,
        },
      });
      setSigns(data?.signs?.signs);
    })();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      router.push(href);
    }
  };

  const menu = [
    {
      name: "Home",
      link: "/",
      subMenu: null,
    },
    {
      name: "Signs",
      link: null,
      subMenu: signs,
    },
    {
      name: "Blogs",
      link: "/sign-blog",
      subMenu: null,
    },
    {
      name: "About us",
      link: "/about-us",
      subMenu: null,
    },
    {
      name: "Contact Us",
      link: "/contact-us",
      subMenu: null,
    },
  ];

  return (
    <div className="header-wrapper">
      <div className="header-inner">
        <div className="header">
          <div className="logo">
            <LazyImage
              style={{ maxWidth: "100%", cursor: "pointer" }}
              src="/images/logo.png"
              alt="Signarama Toronto"
              link="/"
            />
          </div>
          <div className="menu">
            <ul>
              {menu?.map((menuItem, i) => {
                return (
                  <li
                    key={i}
                    onMouseOver={(e) => {
                      if (menuItem?.subMenu) {
                        e.currentTarget
                          .querySelector(".submenu")
                          .classList.add("open");
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (menuItem?.subMenu) {
                        e.currentTarget
                          .querySelector(".submenu")
                          .classList.remove("open");
                      }
                    }}
                  >
                    <span
                      onClick={handleClick}
                      // onClick={(_) => {
                      //   if (menuItem?.link) {
                      //     router.push(menuItem?.link);
                      //   }
                      //   return;
                      // }}
                      href={menuItem?.link}
                    >
                      {menuItem?.name}
                    </span>
                    {menuItem?.subMenu ? (
                      <div
                        className="submenu open"
                        onMouseOver={(e) => {
                          if (menuItem?.subMenu) {
                            e.currentTarget.classList.add("open");
                          }
                        }}
                      >
                        <ul>
                          {menuItem?.subMenu?.map((smenu, index) => (
                            <li key={index}>
                              <span href={smenu?.slug} onClick={handleClick}>
                                {" "}
                                {smenu?.title}{" "}
                              </span>{" "}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
