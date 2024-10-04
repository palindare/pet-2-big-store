import styles from "./SectionBasketGoods.module.css";
import { useSelector, useDispatch } from "react-redux";

function SectionBasketGoods() {
  const state = useSelector((state) => state.menuBasket.menuBasket);

  return (
    <>
      <div className={styles.marking}>
        <div className={styles.container_cart}>
          <div className={styles.container_cart_text}>
            <span>В корзине {state.length} {state.length > 1 ? "товара" : "товар"}</span>
          </div>
          <div className={styles.container_checkbox_all}>
            <label className={styles.label_all} htmlFor="select-all">
              <input
                id="select-all"
                className={styles.select_all}
                type="checkbox"
              />
              <span className={styles.checkbox_custom}></span>
              Выбрать все
            </label>
            <span className={styles.delete_selected}>Удалить выбранные (1)</span>
          </div>
          <div className={styles.container_checkbox_quantity}>
            {state.map(({ id, name, quantity, img }) => {
              return (
                <>
                  <div className={styles.container_goods}>
                    <div className={styles.container_item}>
                      <div className={styles.checkbox_goods}>
                        <label htmlFor="select-id">
                          <input
                            className={styles.select_item}
                            type="checkbox"
                            id="select-id"
                          />
                          <span className={styles.checkbox_item}></span>
                        </label>
                      </div>
                      <div className={styles.container_img}>
                        <img src={img} alt="05 ру" />
                      </div>
                      <div className={styles.container_info}>
                        <div className={styles.container_name}>
                            <span>{name}</span>
                        </div>
                        <div className={styles.container_tool}>
                          <div className={styles.favorite_btn}></div>
                          <div className={styles.trash_btn}>Удалить</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className={styles.container_sticky}>dads</div>
      </div>
    </>
  );
}

export default SectionBasketGoods;
