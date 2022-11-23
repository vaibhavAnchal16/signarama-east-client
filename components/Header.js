import React, { useState, useSyncExternalStore } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LazyImage from "./LazyImage";
import client from "../apollo-client";
import { SIGNS } from "../graphql/queries";

const Header = () => {
  const _ = require("lodash");
  const router = useRouter();
  const [signs, setSigns] = useState([]);
  const [menu, setMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
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
    if (mobileMenu) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [mobileMenu]);

  useEffect(() => {
    (async () => {
      const { data, loading } = await client.query({
        query: SIGNS,
        variables: {
          page: null,
          size: null,
          filters: null,
        },
      });
      setSigns({
        signs: data?.signs?.signs,
        loading,
      });
      setMenu([
        {
          name: "Home",
          link: "/",
          subMenu: null,
        },
        {
          name: "Signs",
          link: null,
          subMenu: _.chain(data?.signs?.signs)
            ?.groupBy("type")
            .map((elm, key) => ({ name: key, signs: elm }))
            .value(),
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
      ]);
    })();
  }, [setSigns, setMenu]);

  const handleClick = (e) => {
    e.preventDefault();
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      router.push(href);
      if (vw < 1024) {
        setMobileMenu(false);
      }
    }
  };

  if (signs?.loading) return "Loading";
  return (
    <>
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

            <div className={`menu ${mobileMenu ? `open-mobile` : ``}`}>
              <ul>
                {menu?.map((menuItem, i) => {
                  return (
                    <li
                      key={i}
                      onMouseOver={(e) => {
                        document
                          .querySelectorAll(".menu ul > li")
                          .forEach(function (el) {
                            el.classList.remove("open");
                          });
                        if (menuItem?.subMenu) {
                          e.currentTarget.classList.add("open");
                        }
                      }}
                    >
                      <span onClick={handleClick} href={menuItem?.link}>
                        {menuItem?.name}
                      </span>
                      {menuItem?.subMenu ? (
                        <div
                          className="submenu open"
                          onMouseLeave={(e) => {
                            if (menuItem?.subMenu) {
                              e.currentTarget
                                .closest("li")
                                .classList.remove("open");
                            }
                          }}
                        >
                          <div className="ghost">
                            {menuItem?.subMenu?.map((navItem, ind) => (
                              <div className={`item-${ind}`} key={ind}>
                                <h2>{navItem?.name}</h2>
                                <ul>
                                  {navItem?.signs?.map((item, i) => (
                                    <li key={i}>
                                      {" "}
                                      <span
                                        href={`/${item?.slug}`}
                                        onClick={handleClick}
                                      >
                                        {" "}
                                        {item?.title}{" "}
                                      </span>{" "}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              className="hamburger-icon"
              onClick={(e) => setMobileMenu(!mobileMenu)}
            >
              <div id="nav-icon3" className={mobileMenu ? `open` : ``}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
