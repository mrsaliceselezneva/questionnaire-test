import React, { FC } from "react";
import Cookies from "cookies-ts";
import View from "./View";

const Connector: FC = () => {
    const cookies = new Cookies();

    const isContinue = (cookies.get("route")?.length || 0) > 1;

    const to = "/personal";

    const dataStart = {
        to: to,
        text: isContinue ? "Заново" : "Начать",
        isDanger: isContinue,
    };

    const dataContinue = {
        to: cookies.get("route") || "/",
        text: "Продолжить",
    };

    return <View dataStart={dataStart} dataContinue={dataContinue} isContinue={isContinue} />;
};

export default Connector;
