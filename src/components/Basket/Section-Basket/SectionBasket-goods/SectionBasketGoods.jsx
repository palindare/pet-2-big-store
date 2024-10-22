import styles from "./SectionBasketGoods.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SectionBasketLink from "./SectionBasket-Link/SectionBasketLink";

function SectionBasketGoods() {
  const state = useSelector((state) => state.menuBasket.menuBasket);
  const stateFav = useSelector((state) => state.menuBasket.menufavorite);
  const [transitEnd, setTransitEnd] = useState(false);
  const [selectAll, setSelectAll] = useState(true);
  const dispatch = useDispatch();
  const currentChecked = state.filter((data) => data.checked !== false);

  useEffect(() => {
    state.forEach((data) => (data.checked = true));
    state.forEach((data) => (data.showTextFavorite = false));
  }, []);

  const plusHandler = (currentId) => {
    dispatch({ type: "CALC_PLUS", payload: currentId });
  };

  const minusHandler = (currentId) => {
    const currentArr = state.find((data) => data.id === currentId);
    if (currentArr.quantity === 1) {
      const changeArr = state.filter((data) => data.id !== currentId);
      dispatch({ type: "REMOVE_DATA", payload: changeArr });
    } else {
      dispatch({ type: "CALC_MINUS", payload: currentId });
    }
  };

  const overFavoriteHandler = (currentId) => {
    const temp = setTimeout(() => {
      dispatch({ type: "SHOW_FAVORITE", payload: currentId });
    }, 150);
    setTransitEnd(temp);
  };

  const outFavoriteHandler = (currentId) => {
    clearTimeout(transitEnd);
    dispatch({ type: "HIDE_FAVORITE", payload: currentId });
  };

  const setCheckedHandler = (currentId) => {
    const currentState = state.find(({ id }) => id === currentId);
    if (currentState) {
      dispatch({ type: "CHANGE_CHECKED", payload: currentId });
    }
  };

  const selectAllHandler = () => {
    selectAll ? setSelectAll(false) : setSelectAll(true);
    if (selectAll) {
      state.forEach((data) => (data.checked = false));
    } else {
      state.forEach((data) => (data.checked = true));
    }
  };

  const deleteBasketHandler = (currentId) => {
    const changeArr = state.filter((data) => data.id !== currentId);
    dispatch({ type: "REMOVE_DATA", payload: changeArr });
  };

  const deleteCheckedHandler = () => {
    const changeState = state.filter((data) => data.checked !== true);
    if (changeState === undefined) return;
    dispatch({ type: "REMOVE_DATA", payload: changeState });
    dispatch({ type: "HIDE_FAVORITE_ALL", payload: "" });
  };

  const addFavoriteHandler = (currentId) => {
    const data = state.find((data) => data.id === currentId);
    const clearExist = stateFav.filter((item) => item.id === data.id);
    if (!clearExist.length) {
      dispatch({ type: "ADD_MENU_FAVORITE", payload: data });
    } else if (clearExist.length) {
      dispatch({ type: "DELETE_MENU_FAVORITE", payload: data.id });
    }
  };

  return (
    <>
      <div className={styles.marking}>
        <div className={styles.container_cart}>
          <div className={styles.container_cart_text}>
            <span>
              В корзине {state.length} {state.length > 1 ? "товара" : "товар"}
            </span>
          </div>
          <div className={styles.container_checkbox_all}>
            <label className={styles.label_all} htmlFor="select-all">
              <input
                id="select-all"
                className={styles.select_all}
                onChange={selectAllHandler}
                checked={selectAll}
                type="checkbox"
              />
              <span className={styles.checkbox_custom}></span>
              Выбрать все
            </label>
            <span
              onClick={() => deleteCheckedHandler()}
              className={styles.delete_selected}
            >
              Удалить выбранные ({currentChecked.length})
            </span>
          </div>
          <div className={styles.container_checkbox_quantity}>
            {state.map(
              ({
                id,
                name,
                quantity,
                img,
                price,
                checked,
                showTextFavorite,
              }) => {
                return (
                  <>
                    <div className={styles.container_goods}>
                      <div className={styles.container_item}>
                        <div className={styles.container_info_item}>
                          <div className={styles.checkbox_goods}>
                            <label htmlFor={`select_${id}`}>
                              <input
                                className={styles.select_item}
                                onChange={() => setCheckedHandler(id)}
                                checked={checked === undefined ? true : checked}
                                type="checkbox"
                                id={`select_${id}`}
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
                              <div
                                onMouseOver={() => overFavoriteHandler(id)}
                                onMouseOut={() => outFavoriteHandler(id)}
                                onClick={() => addFavoriteHandler(id)}
                                className={
                                  stateFav.some((data) => data.id === id)
                                    ? styles.favorite_btn_active
                                    : styles.favorite_btn
                                }
                              ></div>
                              <div
                                style={{
                                  display: showTextFavorite ? "flex" : "none",
                                }}
                                className={styles.favorite_text}
                              >
                                {stateFav.some((data) => data.id === id)
                                  ? "Удалить из избранного"
                                  : "Добавить в избранное"}
                              </div>
                              <div
                                onClick={() => deleteBasketHandler(id)}
                                className={styles.trash_btn}
                              >
                                Удалить
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.place_order_info}>
                          <div className={styles.container_quantity}>
                            <div className={styles.container_calc}>
                              <div
                                onClick={() => minusHandler(id)}
                                className={styles.minus}
                              ></div>
                              <span style={{ fontSize: "14px" }}>
                                {quantity}
                              </span>
                              <div
                                onClick={() => plusHandler(id)}
                                className={styles.plus}
                              ></div>
                            </div>
                          </div>
                          <div className={styles.container_price}>
                            <span>{price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            )}
          </div>
        <SectionBasketLink/>
        </div>
        <div className={styles.container_sticky}>dads</div>
      </div>
    </>
  );
}

export default SectionBasketGoods;
