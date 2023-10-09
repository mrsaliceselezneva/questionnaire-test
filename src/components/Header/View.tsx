import React, { FC } from "react";
import InfoText from "components/InfoText";
import colors from "styles/colors";
import { Wrapper, Header } from "./styles";

const View: FC = () => {
    const data = {
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
        <Wrapper>
            <Header>
                <InfoText {...data} />
            </Header>
        </Wrapper>
    );
};

export default View;
