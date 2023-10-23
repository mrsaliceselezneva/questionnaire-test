import React, { FC } from "react";
import { useLogin, useLogout } from "api/helpers";
import View from "./View";

type dataTextType = {
    to: string;
    text: string;
    fontWeight: number;
    fontSize: number;
    lineHeight: number;
    color: string;
    colorHover: string;
    isLink: boolean;
};
interface TypeProps {
    dataText: dataTextType;
    isEmptyProfile: boolean;
    picture: string;
}

const Controller: FC<TypeProps> = (props) => {
    const { dataText, isEmptyProfile, picture } = props;

    return (
        <View
            dataText={dataText}
            isEmptyProfile={isEmptyProfile}
            picture={picture}
            logout={useLogout()}
            login={useLogin()}
        />
    );
};

export default Controller;
