import styles from "./ItemBasket.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ItemBasket({ showBasket, transitBasket }) {
  const state = useSelector((state) => state.menuBasket.menuBasket);
  const dispatch = useDispatch();
  let resultSum;
  let sum = 0;

  useEffect(() => {
    state.forEach(data => !data.quantity ? data.quantity = 1 : data)
  }, [state])

  const plusHandler = (currentId) => {
    dispatch({type: "CALC_PLUS", payload: currentId})
  }

  const minusHandler = (currentId) => {
    const currentArr = state.find(data => data.id === currentId);
    if (currentArr.quantity === 1) {
      const changeArr = state.filter(data => data.id !== currentId);
      dispatch({type: "REMOVE_DATA", payload: changeArr})
    } else {
      dispatch({type: "CALC_MINUS", payload: currentId})
    }
  }

  const removeCurrentArr = (currentId) => {
    const changeArr = state.filter(data => data.id !== currentId);
    dispatch({type: "REMOVE_DATA", payload: changeArr})
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
                        <div onClick={() => removeCurrentArr(id)} className={styles.trash_img}></div>
                      </div>
                    </div>
                    <div className={styles.container_price}>
                      <span>{price}</span>
                    </div>
                    <div className={styles.container_calc}>
                      <div className={styles.quantity_info}>
                        <button onClick={() =>  minusHandler(id)}className={styles.minus}></button>
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
          <Link to="/basket">
          <button className={styles.buy_btn}>
            В корзину, товаров на {resultSum}
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ItemBasket;
