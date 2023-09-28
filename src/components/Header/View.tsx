import * as React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./styles.ts";

const View = () => {
    return (
        <wrapper>
            <div className={styles.wrapper__header}>
                <Link to='/' className={styles.wrapper__header__main}>
                    <FiHome className={styles.wrapper__header__main__icon} />
                    На главную
                </Link>
            </div>
        </wrapper>
    );
};

export default View;
