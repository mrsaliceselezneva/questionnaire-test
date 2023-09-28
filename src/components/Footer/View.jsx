import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

import styles from "./styles.module.scss";

const View = (props) => {
    const { name, phone, linkTelegram, linkVK } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__footer}>
                <div className={styles.wrapper__footer__info}>
                    <div className={styles.wrapper__footer__info__fio}>{name}</div>
                    <div className={styles.wrapper__footer__info__phone}>{phone}</div>
                </div>

                <a className={styles.wrapper__footer__background_icon} href={linkVK}>
                    <SlSocialVkontakte className={styles.wrapper__footer__background_icon__icon} />
                </a>
                <a className={styles.wrapper__footer__background_icon} href={linkTelegram}>
                    <FaTelegramPlane className={styles.wrapper__footer__background_icon__icon} />
                </a>
            </div>
        </div>
    );
};

export default View;
