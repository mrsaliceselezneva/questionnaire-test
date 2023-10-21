import React, { FC } from "react";
import axios from "axios";
import InfoText from "components/InfoText";
import colors from "styles/colors";
import { Tooltip } from "react-tooltip";
import { FcGoogle } from "react-icons/fc";
import { Wrapper, Header, Google, Img } from "./styles";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { setCreateProfile, setDeleteProfile } from "../../redux/slices/profileSlice";
import { useDispatch, useSelector } from "react-redux";

const View: FC = () => {
    const dispatch = useDispatch();
    const { profile } = useSelector((state: any) => state.profileReducer);

    const data = {
        to: "/",
        text: "Главная",
        fontWeight: 700,
        fontSize: 22,
        lineHeight: 22,
        color: colors.whiteColor,
        colorHover: colors.blackColor,
        isLink: true,
    };

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

    const logout = async () => {
        googleLogout();
        await dispatch(setDeleteProfile());
    };

    return (
        <Wrapper>
            <Header>
                <InfoText {...data} />

                {profile.email.length > 0 ? (
                    <>
                        <Tooltip anchorSelect='#logout' place='bottom'>
                            выйти из <FcGoogle />
                        </Tooltip>
                        <Img
                            src={profile.picture}
                            alt='user image'
                            id='logout'
                            onClick={() => logout()}
                        />
                    </>
                ) : (
                    <>
                        <Tooltip anchorSelect='#login' place='bottom'>
                            войти c <FcGoogle />
                        </Tooltip>
                        <Google id='login' onClick={() => login()} />
                    </>
                )}
            </Header>
        </Wrapper>
    );
};

export default View;
