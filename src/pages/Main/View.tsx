import * as React from "react";
import Wrapper from "./styles";
import ButtonLink from "../../components/ButtonLink/styles";
import colors from "../../styles/colors";

const View = () => {
    return (
        <Wrapper>
            <ButtonLink
                to={"/form"}
                fontWeight={600}
                fontSize={16}
                lineHeight={18}
                color={colors.whiteColor}
                background={colors.blueColor}
                backgroundHover={colors.blueColorHover}
                backgroundActive={colors.blueColorActive}
            >
                Заполнить анкету
            </ButtonLink>
        </Wrapper>
    );
};

export default View;
