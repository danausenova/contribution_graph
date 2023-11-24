import React from "react";
import RCTooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

const Tooltip = ({ title, helperText, children, ...props }) => {
  return (
    <RCTooltip
      placement="top"
      trigger={["click"]}
      overlay={
        <>
          <p className="tooltip-text">{title}</p>
          {helperText && <p className="tooltip-helper-text">{helperText}</p>}
        </>
      }
      {...props}
    >
      {children}
    </RCTooltip>
  );
};

export default Tooltip;
