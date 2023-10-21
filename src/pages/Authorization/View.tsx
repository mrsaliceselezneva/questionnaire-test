import React, { FC } from "react";
import axios from "axios";
import ButtonLink from "components/ButtonLink";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { setCreateProfile, setDeleteProfile } from "../../redux/slices/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import Wrapper from "./styles";
import { Button } from "antd";
import { BiLogoGoogle } from "react-icons/bi";

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

    const dispatch = useDispatch();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log("Login Success:", codeResponse);
            axios
                .get(
                    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${codeResponse.access_token}`,
                            Accept: "application/json",
                        },
                    },
                )
                .then((result) => {
                    console.log(result.data);
                    dispatch(setCreateProfile(result.data));
                })
                .catch((error) => console.log(error));
        },
        onError: (error) => console.log("Login Failed:", error),
    });

    return (
        <Wrapper>
            <Button type='primary' onClick={() => login()}>
                войти c <BiLogoGoogle />
            </Button>
        </Wrapper>
    );
};

export default View;
