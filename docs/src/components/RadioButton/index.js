import React from "react";
import README from "./README.md";
import Component from "..";
import { Radio } from "@kvraamkey/react-ui";

export default () => {
    const [selectedValue, setSelectedValue] = React.useState("A");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Component readme={README}>
            <br />
            <Radio className='custom' name='Select Me' checked={selectedValue === "A"} onChange={handleChange} value='A' />

            <Radio name='Select' checked={selectedValue === "B"} onChange={handleChange} value='B' />
        </Component>
    );
};
