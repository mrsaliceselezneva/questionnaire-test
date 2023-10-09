import styled from "styled-components";
import colors from "styles/colors";

import { FaTelegramPlane } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    height: 45px;
    width: 45px;
    border-radius: 12px;
    color: ${colors.blueColor};
    cursor: pointer;

    &:hover {
        background-color: ${colors.whiteColor};
    }
`;

const IconVk = styled(SlSocialVkontakte)`
    height: 35px;
    width: 35px;
    color: ${colors.blueColor};
    cursor: pointer;
`;

const IconTg = styled(FaTelegramPlane)`
    height: 35px;
    width: 35px;
    color: ${colors.blueColor};
    cursor: pointer;
`;

export { Link, IconVk, IconTg };
