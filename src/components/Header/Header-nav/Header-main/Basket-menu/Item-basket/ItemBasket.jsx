import styles from "./ItemBasket.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function ItemBasket({ showBasket, transitBasket }) {
  const state = useSelector((state) => state.menuBasket.menuBasket);
  let resultSum;
  let sum = 0;

  useEffect(() => {
    if (state.some(data => !data.quantity) || state.some(data => data.quantity < 2)) {
      state.forEach(data => data.quantity = 1)
    }
  }, [state])

  const plusHandler = (currentid) => {
    const currentState = state.find(({id}) => id  == currentid)
    currentState.quantity += 1
  }

  return (
    <>
      <div
        className={styles.basket_menu}
        style={{
          height: showBasket ? "" : "0px",
          opacity: transitBasket ? "1" : "0",
        }}
      >
        {state.map(({ id, name, img, price, quantity }) => {
          let changedPrice = price.replace(" ", "");
          sum += +changedPrice;
          resultSum = new Intl.NumberFormat("Ru-ru", {
            style: "currency",
            currency: "RUB",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          }).format(sum);
          return (
            <>
              <div className={styles.basket_container}>
                <div className={styles.container_info}>
                  <div className={styles.container_img}>
                    <img src={img} alt="05 ру" />
                  </div>
                  <div className={styles.marking_info}>
                    <div className={styles.container_items}>
                      <div className={styles.container_text}>
                        <span>{name}</span>
                      </div>
                      <div className={styles.container_svg}>
                        <div className={styles.trash_img}></div>
                      </div>
                    </div>
                    <div className={styles.container_price}>
                      <span>{price}</span>
                    </div>
                    <div className={styles.container_calc}>
                      <div className={styles.quantity_info}>
                        <button onClick={() =>  plusHandler(id)}className={styles.minus}></button>
                        <div style={{fontSize: "14px"}}>{quantity}</div>
                        <button onClick={() => plusHandler(id)} className={styles.plus}></button>
                      </div>
                      <div className={styles.unit_measurement_text}>шт.</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <div className={styles.buy_container}>
          <button className={styles.buy_btn}>
            В корзину, товаров на {resultSum}
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemBasket;
