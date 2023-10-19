import React, { FC } from "react";
import View from "./View";
import colors from "styles/colors";
import { useNavigate } from "react-router-dom";
import Cookies from "cookies-ts";

const Connector: FC = () => {
    const cookies = new Cookies();

    const isContinue = (cookies.get("route")?.length || 0) > 1;

    const dataStart = {
        to: "/personal",
        text: isContinue ? "Заново" : "Начать",
        fontWeight: 800,
        fontSize: 16,
        lineHeight: 16,
        color: colors.whiteColor,
        background: colors.blueColor,
        isDanger: isContinue,
    };

    const dataContinue = {
        to: cookies.get("route") || "/",
        text: "Продолжить",
    };

    return <View dataStart={dataStart} dataContinue={dataContinue} isContinue={isContinue} />;
};

export default Connector;
