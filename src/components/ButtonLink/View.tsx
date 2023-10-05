import * as React from "react";
import ButtonLink from "./styles";

const View = (props) => {
    return (
        <ButtonLink {...props} to={props.to}>
            {props.text}
        </ButtonLink>
    );
};

export default View;
