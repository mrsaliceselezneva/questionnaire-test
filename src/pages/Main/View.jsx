import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const View = () => {
    return (
        <div className={styles.wrapper}>
            <Link to='/form' className={styles.wrapper__button}>
                Заполнить анкету
            </Link>
        </div>
    );
};

export default View;
