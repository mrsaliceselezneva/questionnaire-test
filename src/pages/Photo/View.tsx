import React, { FC } from "react";
import Wrapper from "./styles";
import colors from "styles/colors";
import ButtonLink from "components/ButtonLink";

const View: FC = () => {
    const data = {
        to: "/",
        text: "назад",
        fontWeight: 800,
        fontSize: 16,
        lineHeight: 16,
        color: colors.whiteColor,
        background: colors.blueColor,
        backgroundHover: colors.blueColorHover,
        backgroundActive: colors.blueColorActive,
    };
    return (
        <Wrapper>
            <ButtonLink {...data} />
        </Wrapper>
    );
};

export default View;
