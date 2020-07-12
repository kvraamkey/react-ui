import React from "react";
import README from "./README.md";
import Component from "../";
import { Button } from "@kvraamkey/react-ui";

export default () => {
    return (
        <Component readme={README}>
            <h4>Button Variations</h4>
            <Button.List>
                <Button name='Default' variant={"light-grey"} />
                <Button name='Primary' variant={"blue"} />
                <Button name='Secondary' variant={"indigo"} />
                <Button name='Success' variant={"green"} />
                <Button name='Info' variant={"cyan"} />
                <Button name='Warning' variant={"orange"} />
                <Button name='Danger' variant={"red"} disabled />
                <Button name='Dark' variant={"black"} />
                <Button name='link button' as={"a"} href='/' link />
            </Button.List>
            <h4>Outline Buttons with Variations</h4>
            <Button.List>
                <Button name='Default' outline />
                <Button name='Primary' variant={"blue"} outline />
                <Button name='Secondary' variant={"indigo"} outline />
                <Button name='Success' variant={"green"} outline />
                <Button name='Info' variant={"cyan"} outline />
            </Button.List>

            <h4>Outline Buttons with Variations rounded</h4>
            <Button.List>
                <Button name='Default' outline rounded />
                <Button name='Primary' variant={"blue"} outline rounded link />
                <Button name='Secondary' variant={"indigo"} outline rounded />
                <Button name='Success' variant={"green"} outline rounded />
                <Button name='Info' variant={"cyan"} outline rounded />
            </Button.List>
        </Component>
    );
};
