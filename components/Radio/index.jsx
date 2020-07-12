import React from "react";
import classNames from "classnames";

const Radio = (props) => {
    const { checked, value, name, onChange, disabled, className, labelStyle } = props;
    var radioBtnClass = classNames("pointer w3-flex w3-item-center w3-margin-bottom", className);

    return (
        <div className={radioBtnClass}>
            <input className='w3-radio' id={name} type='radio' checked={checked} disabled={disabled || false} value={value} name={name} onChange={onChange} />
            <label className='pointer' style={{ ...labelStyle }} htmlFor={name}>
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
