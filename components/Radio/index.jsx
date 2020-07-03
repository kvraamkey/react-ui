import React from "react";
import classNames from "classnames";

const Radio = (props) => {
    const { checked, value, name, onChange, disabled, className, labelStyle } = props;
    var radioBtnClass = classNames("c-radio", className);

    return (
        <div className={radioBtnClass}>
            <input id={name} type='radio' checked={checked} disabled={disabled || false} value={value} name={name} onChange={onChange} />
            <label style={{ ...labelStyle }} htmlFor={name}>
                {name}
            </label>
        </div>
    );
};

Radio.defaultProps = {
    onChange: () => {},
    checked: false,
    disabled: false,
    name: "Select me",
    value: ""
};

export default Radio;
