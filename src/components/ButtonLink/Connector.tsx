import View from "./View";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCreateStep } from "../../redux/slices/stepSlice";
import Cookies from "cookies-ts";

type dataType = {
    to: string;
    text: string;
    isDanger?: boolean;
    type?: string;
};

interface TypeProps {
    data: dataType;
    click?: any;
}

const Connector: FC<TypeProps> = (props) => {
    const { data, click } = props;

    const navigate = useNavigate();
    const cookies = new Cookies();

    const dispatch = useDispatch();

    return (
        <View
            {...data}
            renavigate={() => {
                cookies.set("route", data.to);
                dispatch(setCreateStep(data.to));
                navigate(data.to);
                click;
            }}
        />
    );
};

export default Connector;
