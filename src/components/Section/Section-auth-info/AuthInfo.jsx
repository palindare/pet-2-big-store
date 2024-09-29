import styles from "./AuthInfo.module.css";
import bonus_text from "../images/auth-banner/bonus-number.svg";
import bonus_img from "../images/auth-banner/bonus.png";
import time_img from "../images/darkstore-banner/time.svg";
import grape_img from "../images/darkstore-banner/grape.png";
import cheese_img from "../images/darkstore-banner/cheese.png";
import milk_img from "../images/darkstore-banner/milk.png";
import { useSelector,useDispatch } from "react-redux";

function AuthInfo() {
  const state = useSelector((state) => state.showBurger.showBurgerMenu);
  const dispatch = useDispatch();
  const hideListCatalog = () => {
    if (state) {
      dispatch({ type: "SETMENU", payload: false });
    }
  }
  return (
    <>
    <div onClick={() => hideListCatalog()} >
      <div className={styles.marking}>
        <div className={styles.container_info}>
          <div className={styles.container_info_auth}>
            <div className={styles.auth_padding}>
              <div className={styles.text_auth}>
                <span className={styles.text_bold}>Бонусная регистрация</span>
                <div className={styles.reg_text_info}>
                  <span className={styles.text}>
                    Регистрируйтесь и получите бонусы
                  </span>
                  <img src={bonus_text} alt="05 ру бонус текст" />
                </div>
              </div>
            </div>
            <div className={styles.bonus_container}>
              <img src={bonus_img} alt="05 ру бонус" />
            </div>
          </div>
          <div className={styles.container_info_darkstore}>
            <div className={styles.banner_padding}>
              <div className={styles.darkStore_container_text}>
                <div className={styles.darkStore_main_text}>
                  <span>даркстор</span>
                </div>
                <div className={styles.darkStore_text}>
                  <span>
                    БЫСТРАЯ <br /> ДОСТАВКА ПРОДУКТОВ
                  </span>
                </div>
              </div>
              <div className={styles.darkStore_container_img}>
                <div className={styles.img_time}>
                  <img src={time_img} alt="05 ру время" />
                </div>
                <div className={styles.img_animation}>
                  <img className={styles.first_animation} src={grape_img} alt="05 ру виноград" />
                  <img className={styles.second_animation} src={cheese_img} alt="05 ру сыр" />
                  <img className={styles.third_animation}src={milk_img} alt="05 ру молоко" />
                </div>
              </div>
              <div className={styles.darkStore_link_container}>
                  <span>Перейти</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AuthInfo;
