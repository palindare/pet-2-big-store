import styles from "./RecommendedСonditioners.module.css";
import { useSelector, useDispatch } from "react-redux";

function RecommendedСonditioners() {
  const state = useSelector((state) => state.slides.slideConditioners);
  const stateBasket = useSelector((state) => state.menuBasket.menuBasket);
  const dispatch = useDispatch();
  const addMenuBasket = (currentId) => {
    const data = state.find(({ id }) => id === currentId);
    dispatch({type:"ADD_MENU_BASKET", payload: data})
  };

  // console.log(stateBasket)

  return (
    <>
      <div className={styles.container_conditioners}>
        {state.map(({ id, img, name, price, bonus, span }, index) => {
          return (
            <div
              key={index}
              className={!span ? styles.conditioner : styles.conditioner_span}
            >
              <div className={styles.marking_conditioners}>
                <div className={styles.container_info}>
                  <div
                    style={{ height: !span ? "136px" : "100%" }}
                    className={styles.container_img}
                  >
                    <img src={img} alt="05 ру кондиционер" />
                    {bonus && (
                      <div className={styles.container_bonus}>
                        <span>{bonus}</span>
                      </div>
                    )}
                  </div>
                  <div className={styles.container_info_items}>
                    <div className={styles.container_name}>{name}</div>
                    <div
                      className={
                        !span
                          ? styles.container_price
                          : styles.container_price_span
                      }
                    >
                      {price}
                    </div>
                    <div className={styles.container_buy}>
                      <div className={styles.hover_items}>
                        <div className={styles.container_svg}>
                          <svg
                            width="14"
                            height="15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.778 11.199a1.866 1.866 0 110 3.732 1.866 1.866 0 010-3.732zm8.4 0a1.866 1.866 0 110 3.733 1.866 1.866 0 010-3.733zM.537.093c.56-.186 1.027 0 1.213.467l.467 1.306H6.51c.56 0 .933.374.933.934s-.373.933-.933.933H2.965l1.4 3.733h7.185l.654-1.4c.186-.373.746-.56 1.213-.373.466.28.653.84.466 1.213l-.933 1.866c-.187.374-.467.56-.84.56H3.711c-.373 0-.746-.28-.84-.56l-2.8-7.465C-.114.747.072.28.54.093zM11.178 0c.56 0 .932.373.932.933v.933h.933c.56 0 .934.374.934.934s-.374.933-.934.933h-.933v.933c0 .56-.373.933-.933.933s-.933-.373-.933-.933v-.933H9.31c-.56 0-.933-.373-.933-.933s.374-.934.933-.934h.934V.933c0-.56.373-.933.933-.933z"
                            />
                          </svg>
                        </div>
                        <span onClick={() => addMenuBasket(id)}>В корзину</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RecommendedСonditioners;
