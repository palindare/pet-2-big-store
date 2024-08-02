import styles from "./HeaderTopBar.module.css";
import darkStore_img from "../images/top-bar-images/darkStore.svg";
import darkStore_time_img from "../images/top-bar-images/darkstore-time.svg";
import location_img from "../images/top-bar-images/location.svg";
import cheese_img from "../images/top-bar-images/products/cheese.png";
import grape_img from "../images/top-bar-images/products/grape.png";
import milk_img from "../images/top-bar-images/products/milk.png";

function HeaderTopBar() {
  return (
    <>
      <div className={styles.container_content}>
        <div className={styles.container_items}>
          <div className={styles.darkstore_logo}>
            <img src={darkStore_img} alt="darkstore logo" />
            <span>даркстор</span>
          </div>
          <div className={styles.darkstore_topbar_info}>
            <div className={styles.darkstore_text}>
              <span>БЫСТРАЯ ДОСТАВКА ПРОДУКТОВ</span>
            </div>
            <div className={styles.darkstore_time}>
              <img src={darkStore_time_img} alt="darkstore time" />
            </div>
            <div className={styles.darkStore_products}>
              <img
                className={styles.product_top}
                src={cheese_img}
                alt="darkstore cheese"
              />
              <img
                className={styles.product_buttom}
                src={grape_img}
                alt="darkstore grape"
              />
              <img
                className={styles.product_top}
                src={milk_img}
                alt="darkstore milk"
              />
            </div>
            <div className={styles.darkstore_container_location}>
              <div className={styles.darkStore_border}>
                <div className={styles.darkstore_location}>
                  <img src={location_img} alt="darkstore location" />
                  <span>КАСПИЙСК</span>
                </div>
                <div className={styles.darkstore_location}>
                  <img src={location_img} alt="darkstore location" />
                  <span>МАХАЧКАЛА</span>
                </div>
              </div>
              <div style={{marginLeft: "40px"}} className={styles.darkStore_products}>
                <img
                  className={styles.product_top}
                  src={cheese_img}
                  alt="darkstore cheese"
                />
                <img
                  className={styles.product_buttom}
                  src={grape_img}
                  alt="darkstore grape"
                />
                <img
                  className={styles.product_top}
                  src={milk_img}
                  alt="darkstore milk"
                />
              </div>
            </div>
          </div>
        <div className={styles.darkstore_link}>
          <span>Перейти</span>
        </div>
        </div>
      </div>
    </>
  );
}

// 8424ff

export default HeaderTopBar;
