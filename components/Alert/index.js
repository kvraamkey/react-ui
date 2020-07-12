import * as React from "react";
import cn from "classnames";

const Alert = (props) => {
    const { children, type, text, isDismissible, onDismissClick, className } = props;
    const classes = cn("w3-panel w3-flex w3-item-center w3-display-container w3-round", {
        "w3-pale-green": type === "success" ? true : false,
        "w3-pale-red": type === "danger" ? true : false,
        "w3-pale-yellow": type === "warning" ? true : false,
        "w3-pale-blue": type === "info" ? true : false
    });

    return (
        <div className={cn(classes, className)} role='alert'>
            {children && children}
            {!children && text && <p>{text}</p>}
            {isDismissible && (
                <div className='w3-display-right w3-flex w3-item-center pointer w3-margin-right' onClick={onDismissClick && onDismissClick}>
                    <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' height='1.2em' width='1.2em' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
                    </svg>
                </div>
            )}
        </div>
    );
};

Alert.defaultProps = {
    customClass: ""
};

export default Alert;
