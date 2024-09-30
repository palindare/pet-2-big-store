import styles from "./BasketMenu.module.css";
import EmptyBasket from "./Empty-basket/EmptyBaslet";
import ItemBasket from "./Item-basket/ItemBasket";
import { useState, useRef } from "react";
import { useSelector,useDispatch } from "react-redux";

function BasketMenu() {
  const state = useSelector((state) => state.menuBasket.menuBasket);
  const [showBasket, setShowBasket] = useState(false);
  const [transitBasket, setTransitBasket] = useState(false);
  const dispatch = useDispatch();
  const refDelay = useRef();

  const showBasketHandler = () => {
    clearTimeout(refDelay.current);
    setShowBasket(true);
    setTransitBasket(true);
  };

  const hideBasketHandler = () => {
    setTransitBasket(false);
    refDelay.current = setTimeout(() => {
      setShowBasket(false);
    }, 300);
  };

  console.log(state)

  
  return (
    <>
      <div
        onMouseEnter={() => showBasketHandler()}
        onMouseLeave={() => hideBasketHandler()}
        ref={refDelay}
        className={styles.basket}
      >
        {state.length ? <ItemBasket showBasket={showBasket} transitBasket={transitBasket} /> : <EmptyBasket showBasket={showBasket} transitBasket={transitBasket} /> }
      </div>
    </>
  );
}

export default BasketMenu;
