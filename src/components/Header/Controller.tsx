import React, { FC } from "react";
import { useLogin, useLogout } from "api/helpers";
import { dataTextType } from "api/types";
import View from "./View";
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
