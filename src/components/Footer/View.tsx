import React, { FC } from "react";
import { Wrapper, Info, Footer } from "./styles";
import FooterIcon from "components/FooterIcon";
import InfoText from "components/InfoText";

type dataTextType = {
    text: string;
    fontWeight: number;
    fontSize: number;
    lineHeight: number;
    color: string;
    margin?: number;
    isLink: boolean;
};

type dataLinkType = {
    link: string;
    isVk: boolean;
};
interface TypeProps {
    dataName: dataTextType;
    dataPhone: dataTextType;
    dataTg: dataLinkType;
    dataVk: dataLinkType;
}

const View: FC<TypeProps> = (props) => {
    const { dataName, dataPhone, dataTg, dataVk } = props;

    return (
        <Wrapper>
            <Footer>
                <Info>
                    <InfoText {...dataName} />
                    <InfoText {...dataPhone} />
                </Info>
                <FooterIcon {...dataTg} />
                <FooterIcon {...dataVk} />
            </Footer>
        </Wrapper>
    );
};

export default View;
