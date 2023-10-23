import React, { FC } from "react";
import { useLogin } from "api/helpers";
import View from "./View";

const Controller: FC = () => {
    return <View login={useLogin()} />;
};

export default Controller;
