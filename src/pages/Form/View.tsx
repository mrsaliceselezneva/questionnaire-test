import * as React from "react";
import ButtonLink from "components/ButtonLink/styles";
import colors from "styles/colors";

const View = () => {
    return (
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
    );
};

export default View;
