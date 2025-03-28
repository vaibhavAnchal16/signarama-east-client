import React, { useState } from "react";
import { useEffect } from "react";
import client from "../apollo-client";
import { SIGNS } from "../graphql/queries";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const _ = require("lodash");
  const [menu, setMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        let top = window.scrollY;
        if (top < 30) {
          document.querySelector(".header-wrapper") &&
            document
              .querySelector(".header-wrapper")
              .classList.remove("scrolled");
        } else {
          document.querySelector(".header-wrapper") &&
            document.querySelector(".header-wrapper").classList.add("scrolled");
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
      setMenu([
        {
          name: "Home",
          link: "/",
          subMenu: null,
        },
        {
          name: "Our Signs",
          link: "/our-signs",
          subMenu: _.chain(data?.signs?.signs)
            ?.groupBy("type")
            .map((elm, key) => ({ name: key, signs: elm }))
            .value(),
        },
        {
          name: "Blogs",
          link: "/blog",
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
  }, [setMenu]);

  const handleClick = (e) => {
    console.log("clicked");
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (vw < 1024) {
      setMobileMenu(false);
    }
  };

  return (
    <div className="header-wrapper">
      <div className="header-inner">
        <div className="header">
          <div className="logo">
            <Link href={"/"}>
              <Image
                style={{
                  maxWidth: "100%",
                  cursor: "pointer",
                }}
                src={"/images/logo.png"}
                alt="Signarama Toronto"
                width={250}
                height={47}
              />
            </Link>
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
                    onClick={handleClick}
                  >
                    <Link href={menuItem?.link}>{menuItem?.name}</Link>
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
                                  <li key={i} onClick={handleClick}>
                                    <Link
                                      href={`/our-signs/${item?.slug}`}
                                      key={i}
                                    >
                                      <a>{item?.title} </a>
                                    </Link>
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
  );
};

export default Header;
