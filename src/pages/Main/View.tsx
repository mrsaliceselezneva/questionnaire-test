import React, { FC } from "react";
import ButtonLink from "components/ButtonLink";
import { ButtonType } from "antd/es/button";
import Wrapper from "./styles";

type dataType = {
    to: string;
    text: string;
    isDanger?: boolean;
};

interface TypeProps {
    dataStart: dataType;
    dataContinue: dataType;
    isContinue: boolean;
}

const View: FC<TypeProps> = (props) => {
    const { dataStart, dataContinue, isContinue } = props;

    return (
        <Wrapper>
            <ButtonLink data={dataStart} />
            {isContinue && <ButtonLink data={dataContinue} />}
        </Wrapper>
    );
};

export default View;
