import React from "react";
import README from "./README.md";
import Component from "..";
import { Alert } from "@kvraamkey/react-ui";
const types = ["info", "success", "warning", "danger"];
export default () => {
    return (
        <Component readme={README}>
            <br />
            {types.map((type) => (
                <Alert key={type} type={type} isDismissible>
                    <p>
                        <strong>
                            {type.charAt(0).toLocaleUpperCase()}
                            {type.slice(1)}
                        </strong>
                    </p>
                </Alert>
            ))}
        </Component>
    );
};
