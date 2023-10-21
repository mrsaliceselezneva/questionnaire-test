import axios from "axios";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
});

const sendRequest = (url: string, method: string, data?: any) =>
    instance.request({ url, method, data }).then((responce) => responce.data);

const instanceGoogle = axios.create({
    baseURL: `https://www.googleapis.com/oauth2/v1/userinfo?access_token=`,
});

const sendRequestGoogle = (url: string, method: string, access_token: string) =>
    instanceGoogle
        .request({
            url,
            method,
            headers: {
                Authorization: `Bearer ${access_token}`,
                Accept: "application/json",
            },
        })
        .then((responce) => responce.data);

export { sendRequest, sendRequestGoogle };
