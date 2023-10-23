import React, { FC } from "react";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { setCreateProfile } from "../../redux/slices/profileSlice";
import { useDispatch } from "react-redux";
import View from "./View";

const Controller: FC = () => {
    const dispatch = useDispatch();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log("Login Success:", codeResponse);
            //TODO: повторяется в другом файле, нужно вынести и переиспользовать
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

    return <View login={login} />;
};

export default Controller;
