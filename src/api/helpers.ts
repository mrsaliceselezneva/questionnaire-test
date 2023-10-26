import type { RcFile } from "antd/es/upload";
import axios from "axios";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { setCreateProfile, setDeleteProfile } from "../redux/slices/profileSlice";
import { nextStepType } from "api/types";
import { useAppDispatch } from "api/hooks";

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve("" + reader.result);
        reader.onerror = (error) => reject(error);
    });

function useLogin() {
    const dispatch = useAppDispatch();

    return useGoogleLogin({
        onSuccess: (codeResponse) => {
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
                .catch((error) => console.error(error));
        },
        onError: (error) => console.error("Login Failed:", error),
    });
}

function useLogout() {
    const dispatch = useAppDispatch();
    return () => {
        googleLogout();
        dispatch(setDeleteProfile());
    };
}

function useTo(data: nextStepType[], nowStep: string) {
    return data?.find((item: nextStepType) => item.first === nowStep)?.second || "/";
}

export { getBase64, useLogin, useLogout, useTo };
