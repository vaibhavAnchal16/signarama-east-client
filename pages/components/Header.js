import { useRouter } from "next/router";
import { useEffect } from "react";
import { LazyImage } from "./LazyImage";

export const Header = () => {
  const router = useRouter();

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        let top = window.scrollY;
        if (top < 50) {
          document.querySelector(".header-inner").classList.remove("scrolled");
        } else {
          document.querySelector(".header-inner").classList.add("scrolled");
        }
      },
      false
    );
  });

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
      name: "Store Front",
      link: null,
      subMenu: [
        {
          name: "First Item",
          link: "/",
        },
        {
          name: "Second Item",
          link: "/",
        },
      ],
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
                  <li key={i}>
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
                      <div className="submenu">
                        <ul>
                          {menuItem?.subMenu?.map((smenu, index) => (
                            <li key={index}>
                              <span
                                href={smenu?.link}
                                onClick={handleClick}
                                // onClick={(_) => {
                                //   if (smenu?.link) {
                                //     router.push(smenu?.link);
                                //   }
                                //   return;
                                // }}
                              >
                                {" "}
                                {smenu?.name}{" "}
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
