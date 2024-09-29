import styles from "./EmptyBasket.module.css";

function EmptyBasket({showBasket,transitBasket}) {
    return (
    <>
        <div
          className={styles.basket_menu}
          style={{
            height: showBasket ? "402px" : "0px",
            opacity: transitBasket ? "1" : "0",
          }}
        >
          <div className={styles.basket_marking}>
            <div className={styles.container_basket}>
              <div className={styles.img_container}>
                <div className={styles.basket_img}></div>
              </div>
              <div className={styles.container_text}>
                <div className={styles.main_text}>
                  <span>В корзине нет товаров</span>
                </div>
                <div className={styles.texts}>
                  Вы можете найти на сайте интересные <br /> товары и добавить
                  их в список
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
    )
}

export default EmptyBasket;
