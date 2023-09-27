import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const View = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__header}>
                <Link to='/' className={styles.wrapper__header__main}>
                    <FiHome className={styles.wrapper__header__main__icon} />
                    На главную
                </Link>
            </div>
        </div>
    );
};

export default View;
