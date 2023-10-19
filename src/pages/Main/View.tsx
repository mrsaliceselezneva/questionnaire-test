import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import colors from "styles/colors";
import ButtonLink from "components/ButtonLink";
import Wrapper from "./styles";
import Cookies from "cookies-ts";

type dataType = {
    to: string;
    text: string;
    fontWeight?: number;
    fontSize?: number;
    lineHeight?: number;
    color?: string;
    background?: string;
    backgroundHover?: string;
    backgroundActive?: string;
    isDanger?: boolean;
    type?: string;
};

interface TypeProps {
    dataStart: dataType;
    dataContinue: dataType;
    isContinue: boolean;
}

const View: FC<TypeProps> = (props) => {
    const { dataStart, dataContinue, isContinue } = props;
    console.log(isContinue);

    return (
        <Wrapper>
            <ButtonLink data={dataStart} />
            {isContinue && <ButtonLink data={dataContinue} />}
        </Wrapper>
    );
};

export default View;
