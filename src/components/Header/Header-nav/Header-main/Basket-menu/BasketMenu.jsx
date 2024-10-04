import styles from "./BasketMenu.module.css";
import EmptyBasket from "./Empty-basket/EmptyBaslet";
import ItemBasket from "./Item-basket/ItemBasket";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function BasketMenu() {
  const state = useSelector((state) => state.menuBasket.menuBasket);
  const [showBasket, setShowBasket] = useState(false);
  const [transitBasket, setTransitBasket] = useState(false);
  const [transitDelay, setTransitDelay] = useState(null);
  const refDelay = useRef();

  const showBasketHandler = () => {
    clearTimeout(refDelay.current);
    clearTimeout(transitDelay);
    setShowBasket(true);
    setTransitBasket(true);
  };

  const hideBasketHandler = () => {
    const delay = setTimeout(() => {
      setTransitBasket(false);
      refDelay.current = setTimeout(() => {
        setShowBasket(false);
      }, 300);
    }, 100);
    setTransitDelay(delay);
  };

  return (
    <>
      <div
        onMouseEnter={() => showBasketHandler()}
        onMouseLeave={() => hideBasketHandler()}
        className={styles.container_basket}
      >
        <Link to="/basket">
          <div ref={refDelay} className={styles.basket}>
            {state.length ? (
              <div className={styles.quantity_goods}>{state.length}</div>
            ) : (
              ""
            )}
          </div>
        </Link>
        {state.length ? (
          <ItemBasket showBasket={showBasket} transitBasket={transitBasket} />
        ) : (
          <EmptyBasket showBasket={showBasket} transitBasket={transitBasket} />
        )}
      </div>
    </>
  );
}

export default BasketMenu;
