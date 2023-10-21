import React, { FC } from "react";
import axios from "axios";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { setCreateProfile, setDeleteProfile } from "../../redux/slices/profileSlice";
import { useDispatch } from "react-redux";
import View from "./View";

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
}

const Controller: FC<TypeProps> = (props) => {
    const { dataText, isEmptyProfile, picture } = props;

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

    const logout = () => {
        googleLogout();
        dispatch(setDeleteProfile());
    };

    return (
        <View
            dataText={dataText}
            isEmptyProfile={isEmptyProfile}
            picture={picture}
            logout={logout}
            login={login}
        />
    );
};

export default Controller;
