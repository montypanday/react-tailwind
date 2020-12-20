import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const ButtonType = {
  primary: "border bg-primary-700 hover:bg-primary-900 text-white font-semibold",
  secondary: "border bg-secondary-300 text-secondary-500 font-semibold",
  plain: "border bg-white text-secondary-500 font-semibold",
};

export const ButtonSize = {
  sm: "inline-flex items-center py-2 px-4 text-xs",
  md: "inline-flex items-center py-2 px-4 text-sm",
  lg: "inline-flex items-center py-3 px-6 text-lg"
}

export const SpinIconSize = {
  sm: "animate-spin -ml-1 mr-3 h-3 w-3 text-white",
  md: "animate-spin -ml-1 mr-3 h-4 w-4 text-white",
  lg: "animate-spin -ml-1 mr-3 h-5 w-5 text-white"
}

export function Button({
  ...props
}) {
  const classes = classNames([ButtonType[props.type],ButtonSize[props.size],props.margin,props.rounded]);
  const spinIconClassNames = SpinIconSize[props.size];

  return (
    <Fragment>
      <button className={classes} {...props}>
        {props.loading && <svg class={spinIconClassNames} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>}
        {props.children}
      </button>
    </Fragment>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary","plain"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  loading: PropTypes.bool,
  margin: PropTypes.string,
  rounded: PropTypes.string
};

Button.defaultProps = {
  type: "plain",
  size: "md",
  loading: false,
  margin: "mx-1 my-1",
  rounded: "rounded"
};
