import React, { FC } from "react";
import colors from "styles/colors";
import { useSelector } from "react-redux";
import Controller from "./Controller";

const Connector: FC = () => {
    const { profile } = useSelector((state: any) => state.profileReducer);

    const isEmptyProfile = profile.email.length > 0;

    const dataText = {
        to: "/",
        text: "Главная",
        fontWeight: 700,
        fontSize: 22,
        lineHeight: 22,
        color: colors.whiteColor,
        colorHover: colors.blackColor,
        isLink: true,
    };

    return (
        <Controller dataText={dataText} isEmptyProfile={isEmptyProfile} picture={profile.picture} />
    );
};

export default Connector;
