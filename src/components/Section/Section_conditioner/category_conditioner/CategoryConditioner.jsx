import styles from "./CategoryConditioner.module.css";
import all_conditioner from "../../images/conditioner/category_conditioner/all_conditioners.webp";
import split_systems from "../../images/conditioner/category_conditioner/split_systems.webp"
import mobile_conditioners from "../../images/conditioner/category_conditioner/mobile_conditioners.webp"

function CategoryConditioner() {
  return (
    <>
      <div className={styles.category_conditioner}>
        <div className={styles.category}>
          <div className={styles.name_category}>Все кондиционеры</div>
          <div className={styles.container_img}>
            <div className={styles.img}>
              <img src={all_conditioner} alt="05.ru кондиционер" />
            </div>
          </div>
        </div>
        <div className={styles.category}>
          <div className={styles.name_category}>Настенные сплит-системы</div>
          <div className={styles.container_img}>
            <div className={styles.img}>
              <img src={split_systems} alt="05.ru кондиционер" />
            </div>
          </div>
        </div>
        <div className={styles.category}>
          <div className={styles.name_category}>Мобильные кондиционеры</div>
          <div className={styles.container_img}>
            <div className={styles.img}>
              <img src={mobile_conditioners} alt="05.ru кондиционер" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryConditioner;
