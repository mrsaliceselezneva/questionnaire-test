import View from "./View";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "cookies-ts";

type dataType = {
    to: string;
    text: string;
    fontWeight?: number;
    fontSize?: number;
    lineHeight?: number;
    color?: string;
    background?: string;
    backgroundHover?: string;
    backgroundActive?: string;
    isDanger?: boolean;
    type?: string;
};

interface TypeProps {
    data: dataType;
}

const Connector: FC<TypeProps> = (props) => {
    const { data } = props;

    const navigate = useNavigate();
    const cookies = new Cookies();

    return (
        <View
            {...data}
            renavigate={() => {
                cookies.set("route", data.to);
                navigate(data.to);
            }}
        />
    );
};

export default Connector;
