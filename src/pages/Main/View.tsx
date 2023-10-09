import React, { FC } from "react";
import colors from "styles/colors";
import ButtonLink from "components/ButtonLink";

import Wrapper from "./styles";

const View: FC = () => {
    const data = {
        to: "/form",
        text: "начать",
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
