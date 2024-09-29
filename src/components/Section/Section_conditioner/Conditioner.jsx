import styles from "./Conditioner.module.css";
import CategoryConditioner from "./category_conditioner/CategoryConditioner";
import RecomendedConditioners from "./recommended-conditioners/RecommendedСonditioners";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector,useDispatch } from "react-redux";

function Conditioner() {
  const [ref, inViev] = useInView({ threshold: 0.5 });
  const [showGoods, setShowGoods] = useState(false);

  useEffect(() => {
    if (inViev) {
      setShowGoods(true);
    }
  }, [inViev]);
  
  const state = useSelector((state) => state.showBurger.showBurgerMenu);
  const dispatch = useDispatch();
  const hideListCatalog = () => {
    if (state) {
      dispatch({ type: "SETMENU", payload: false });
    }
  }

  return (
    <>
      <div onClick={() => hideListCatalog()} className={styles.marking}>
        <div className={styles.container_conditioner}>
          <div
            ref={ref}
            className={styles.category_name}
          >
            <div className={styles.main_text}>Кондиционеры</div>
            <div className={styles.all_goods_btn}>Все товары</div>
          </div>
          <div style={{ display: showGoods ? "block" : "none",}} className={styles.show_goods}>
          <CategoryConditioner />
          <RecomendedConditioners />
          </div>
        </div>
      </div>
    </>
  );
}

export default Conditioner;
