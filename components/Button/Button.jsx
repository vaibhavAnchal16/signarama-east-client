import React from "react";

export default function Button({
  children,
  icon,
  type,
  href = null,
  ...props
}) {
  return (
    <div className={`btn-wrapper ${type ?? ``}`}>
      <button
        onClick={(e) => {
          if (href) {
            e.preventDefault();
            window.location.href = href;
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
