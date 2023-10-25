import React, { FC } from "react";
import InfoText from "components/InfoText";
import { Tooltip } from "react-tooltip";
import { FcGoogle } from "react-icons/fc";
import { dataTextType } from "api/types";
import { Wrapper, Header, Google, Img } from "./styles";
interface TypeProps {
    dataText: dataTextType;
    isEmptyProfile: boolean;
    picture: string;
    logout: () => void;
    login: () => void;
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
