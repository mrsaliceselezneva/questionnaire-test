import React, { FC } from "react";
import colors from "styles/colors";
import ButtonLink from "components/ButtonLink";
import Wrapper from "./styles";
import Cookies from "cookies-ts";

const View: FC = () => {
    const data = {
        to: "/personal",
        text: "Начать",
        fontWeight: 800,
        fontSize: 16,
        lineHeight: 16,
        color: colors.whiteColor,
        background: colors.blueColor,
    };

    return (
        <Wrapper>
            <ButtonLink {...data} />
        </Wrapper>
    );
};

export default View;
