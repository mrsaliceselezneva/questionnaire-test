import type { RcFile } from "antd/es/upload";
import axios from "axios";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { setCreateProfile, setDeleteProfile } from "../redux/slices/profileSlice";
import { useDispatch } from "react-redux";

const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo);
    console.log("Failed:", errorInfo);
};

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

function useLogin() {
    const dispatch = useDispatch();

    return useGoogleLogin({
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
                    dispatch(setCreateProfile(result.data));
                })
                .catch((error) => console.log(error));
        },
        onError: (error) => console.log("Login Failed:", error),
    });
}

function useLogout() {
    const dispatch = useDispatch();
    return () => {
        googleLogout();
        dispatch(setDeleteProfile());
    };
}

type dataType = {
    first: string;
    second: string;
};

function useTo(data: any, nowStep: string) {
    return data.find((item: dataType) => item.first === nowStep).second;
}

export { onFinishFailed, getBase64, useLogin, useLogout, useTo };
