import styles from "./SectionBasketEmpty.module.css";
import { Link } from "react-router-dom";

function SectionBasketEmpty() {
    return (
    <>
    <div className={styles.container_empty}>
        <div className={styles.container_info}>
            <div className={styles.container_img}></div>
            <div className={styles.container_text}>
                <div className={styles.main_text}>
                    В корзине нет товаров
                </div>
                <div className={styles.text}>
                    <span>Добавить товары в корзину можно через</span>
                    <span><Link to="/" className={styles.link_catalog}>каталог</Link> или страницу товара.</span>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default SectionBasketEmpty;
