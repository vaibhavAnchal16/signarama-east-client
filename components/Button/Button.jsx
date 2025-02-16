import React from "react";

export default function Button({
  children,
  icon,
  type,
  href = null,
  target = "_self",
  ...props
}) {
  return (
    <div className={`btn-wrapper ${type ?? ``}`}>
      {href ? (
        <a className="btn-component" href={href} target={target}>
          <span>{children}</span>
          {icon && (
            <span className="icon">
              <span className="left">{icon}</span>
              <span className="right">{icon}</span>
            </span>
          )}
        </a>
      ) : (
        <>
          <button className={`btn-component`} {...props}>
            <span>{children}</span>
            {icon && (
              <span className="icon">
                <span className="left">{icon}</span>
                <span className="right">{icon}</span>
              </span>
            )}
          </button>
        </>
      )}
    </div>
  );
}
