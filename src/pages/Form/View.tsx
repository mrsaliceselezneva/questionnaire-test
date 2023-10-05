import React, { FC } from "react";
import Wrapper from "./styles";
import ButtonLink from "components/ButtonLink";
import colors from "styles/colors";

const View: FC = () => {
    return (
        <Wrapper>
            <ButtonLink
                to={"/"}
                text={"Назад"}
                fontWeight={600}
                fontSize={16}
                lineHeight={18}
                color={colors.whiteColor}
                background={colors.blueColor}
                backgroundHover={colors.blueColorHover}
                backgroundActive={colors.blueColorActive}
            />
        </Wrapper>
    );
};

export default View;