import React, { FC } from "react";
import axios from "axios";
import InfoText from "components/InfoText";
import colors from "styles/colors";
import { Tooltip } from "react-tooltip";
import { FcGoogle } from "react-icons/fc";
import { Wrapper, Header, Google, Img } from "./styles";

type dataTextType = {
    to: string;
    text: string;
    fontWeight: number;
    fontSize: number;
    lineHeight: number;
    color: string;
    colorHover: string;
    isLink: boolean;
};
interface TypeProps {
    dataText: dataTextType;
    isEmptyProfile: boolean;
    picture: string;
    logout: any;
    login: any;
}

const View: FC<TypeProps> = (props) => {
    const { dataText, isEmptyProfile, picture, logout, login } = props;

    return (
        <Wrapper>
            <Header>
                <InfoText {...dataText} />

                {isEmptyProfile ? (
                    <>
                        <Tooltip anchorSelect='#logout' place='bottom'>
                            выйти из <FcGoogle />
                        </Tooltip>
                        <Img src={picture} alt='user image' id='logout' onClick={logout} />
                    </>
                ) : (
                    <>
                        <Tooltip anchorSelect='#login' place='bottom'>
                            войти c <FcGoogle />
                        </Tooltip>
                        <Google id='login' onClick={login} />
                    </>
                )}
            </Header>
        </Wrapper>
    );
};

export default View;
