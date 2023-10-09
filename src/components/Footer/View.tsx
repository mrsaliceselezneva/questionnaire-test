import React, { FC } from "react";
import { Wrapper, Info, Footer } from "./styles";
import colors from "styles/colors";
import FooterIcon from "components/FooterIcon";
import InfoText from "components/InfoText";

interface TypeProps {
    name: string;
    phone: string;
    linkTg: string;
    linkVk: string;
}

const View: FC<TypeProps> = (props: any) => {
    const { name, phone, linkTg, linkVk } = props;

    const dataName = {
        text: name,
        fontWeight: 500,
        fontSize: 17,
        lineHeight: 16,
        color: colors.blueColor,
        margin: 5,
        isLink: false,
    };

    const dataPhone = {
        text: phone,
        fontWeight: 600,
        fontSize: 17,
        lineHeight: 16,
        color: colors.blueColor,
        isLink: false,
    };

    const dataVk = {
        link: linkVk,
        isVk: true,
    };
    const dataTg = {
        link: linkTg,
        isVk: false,
    };

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
