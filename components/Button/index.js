import * as React from "react";
import classNames from "classnames";

type ButtonProps = {
    name: string,
    as?: string,
    variant?: string,
    href?: string,
    link: boolean,
    className?: "string"
};

const Button = (props: ButtonProps) => {
    const { as: Element, variant: buttonType, link, outline, className, disabled } = props;
    var btnClass = classNames("c-btn", {
        [`c-btn__${buttonType}`]: buttonType ? true : false,
        "c-btn__outline": outline ? true : false,
        "c-btn__link": link ? true : false
    });

    return (
        <Element className={classNames(btnClass, className)} disabled={disabled}>
            {props.name}
        </Element>
    );
};

const ButtonWrapper = (props) => <div className='c-btn__list'>{props.children}</div>;

Button.List = ButtonWrapper;

Button.defaultProps = {
    as: "button",
    href: "#"
};

export default Button;
