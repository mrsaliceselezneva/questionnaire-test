import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const View = () => {
    return (
        <div className={styles.wrapper}>
            <Link to='/' className={styles.wrapper__button}>
                Назад
            </Link>
            <button className={styles.wrapper__button}>Заполнить анкету</button>
            lol
        </div>
    );
};

export default View;
