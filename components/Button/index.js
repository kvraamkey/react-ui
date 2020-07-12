import * as React from "react";
import cx from "classnames";

// type ButtonProps = {
//     name: string,
//     as?: string,
//     variant?: string,
//     href?: string,
//     link: boolean,
//     className?: "string"
// };

const Button = (props) => {
    const { as: Element, variant, rounded, outline, className, disabled, link } = props;
    var btnClass = cx("w3-button w3-ripple", {
        [`w3-${variant}`]: variant && !outline ? true : false,
        "w3-border w3-transparent": outline ? true : false,
        "w3-hover-none": disabled || link ? true : false,
        ["underline"]: link ? true : false,
        "w3-hover-light-grey": outline && variant === "default" ? true : false,
        [`w3-border-${variant} w3-hover-${variant}`]: outline && variant !== "default" ? true : false,
        "w3-round": rounded ? true : false
    });

    return (
        <Element className={cx(btnClass, className)} disabled={disabled}>
            {props.name}
        </Element>
    );
};

const ButtonWrapper = (props) => <div className='w3-bar btn'>{props.children}</div>;

Button.List = ButtonWrapper;

Button.defaultProps = {
    as: "button",
    variant: "default",
    href: "#"
};

export default Button;
