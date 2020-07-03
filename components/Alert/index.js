import * as React from "react";
import classNames from "classnames";

const Alert = (props) => {
    const { children, type, text, isDismissible, onDismissClick } = props;
    const classes = classNames("c-alert", {
        [`c-alert__${type}`]: true
    });

    return (
        <div className={classes} role='alert'>
            {children && children}
            {!children && text && text}
            {isDismissible && (
                <div class='c-alert__close' onClick={onDismissClick && onDismissClick}>
                    <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
                    </svg>
                </div>
            )}
        </div>
    );
};

export default Alert;
