import React from "react";

export default function Button({
  children,
  icon,
  type,
  href = null,
  target = "_self",
  ...props
}) {
  // console.log("Button -> href", href, target);
  return (
    <div className={`btn-wrapper ${type ?? ``}`}>
      <button
        onClick={(e) => {
          if (href) {
            window.open(href, target);
          }
        }}
        className={`btn-component`}
        {...props}
      >
        <span>{children}</span>
        {icon && (
          <span className="icon">
            <span className="left">{icon}</span>
            <span className="right">{icon}</span>
          </span>
        )}
      </button>
    </div>
  );
}
