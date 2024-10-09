import styles from "./Slider.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Slider() {
  const state = useSelector((state) => state.slides.slides);
  const [loadSlide, setLoadSlide] = useState(0);
  const [slider] = useState([
    state[state.length - 3],
    state[state.length - 2],
    state[state.length - 1],
    ...state,
    state[0],
    state[1],
    state[2],
  ]);
  const [current, setCurrent] = useState(3);
  const [transit, setTransit] = useState(true);
  const [canSlide, setCanSlide] = useState(false);
  const [canSlideMove, setCanSlideMove] = useState(false);
  const [transitionOn, setTransitionOn] = useState(false);
  const [moveX, setMoveX] = useState(0);
  const [pos1, setPos1] = useState(0);

  const nextSlide = () => {
    if (!canSlide) {
      setCanSlide(true);
      setCurrent((value) => value + 1);
      setTransit(true);
    }
  };

  const previousSlide = () => {
    if (!canSlide) {
      setCanSlide(true);
      setCurrent((value) => value - 1);
      setTransit(true);
    }
  };

  const transitionEnd = () => {
    setCanSlide(false);
    if (current >= state.length + 3) {
      setTransit(false);
      setCurrent(3);
    }
    if (current <= 2) {
      setTransit(false);
      setCurrent(state.length + 2);
    }
  };


  const clickSlideDot = (id) => {
    setTransit(true);
    setCurrent(id + 2);
  };

  let currentSlide;

  if (current === state.length + 3) {
    currentSlide = slider.find(({ id }) => 1 === +id);
  } else if (current === 2) {
    currentSlide = slider.find(({ id }) => state.length === +id);
  } else {
    currentSlide = slider.find(({ id }) => current - 2 === +id);
  }

  const updateCurrent = () => {
    const newCurrent = Math.trunc(moveX / 100);
    if (newCurrent <= -1) {
      nextSlide();
    } else if (newCurrent > 1) {
      previousSlide();
    }
  };

  const onSlideDown = (e) => {
    setCanSlideMove(true);
    setTransitionOn(false);
    setPos1(e.clientX);
  };

  const onSlideMove = (e) => {
    if (canSlideMove) {
      setMoveX(e.clientX - pos1);
    }
  };

  const onSlideUp = () => {
    updateCurrent();
    setTransitionOn(true);
    setCanSlideMove(false);
    setMoveX(0);
  };

  const stateShow = useSelector((state) => state.showBurger.showBurgerMenu);
  const dispatch = useDispatch();
  const hideListCatalog = () => {
    if (stateShow) {
      dispatch({ type: "SETMENU", payload: false });
    }
  }
  
  const showSlider = () => {
    setLoadSlide(num => num + 1)
    setTransitionOn(true)
  }



  return (
    <>
      <div onClick={() => hideListCatalog()} className={styles.main_slider}>
        <div onMouseUp={() => onSlideUp()} className={styles.marking}>
          <div
            className={styles.next_slide_btn}
            onMouseMove={(e) => onSlideMove(e)}
            onClick={() => nextSlide()}
          ></div>
          <div
            onClick={() => previousSlide()}
            onMouseMove={(e) => onSlideMove(e)}
            className={styles.previous_slide_btn}
          ></div>
          <div
            onMouseDown={(e) => onSlideDown(e)}
            onMouseMove={(e) => onSlideMove(e)}
            className={styles.container_slides}
          >
            <div
              onTransitionEnd={() => transitionEnd()}
              onLoad={() => showSlider()}  
              style={{
                transform: `translateX(${moveX}px)`,
                transition: transitionOn ? "all 0.3s" : "none",
                opacity: loadSlide === slider.length ? 1 : 0
              }}
              className={styles.slides}
            >
              <div className={styles.touch_slide}>
                {slider.map(({ slider }, index) => {
                  return (
                    <img
                      key={index}
                      onDragStart={(e) => e.preventDefault()}
                      className={styles.slide_img}
                      style={{
                        transition: transit ? " all 0.25s" : "none",
                        transform: `translate(${(index - current) * 101.7}%)`,
                      }}
                      src={slider}
                      alt="05.ru слайд"
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.container_dots}>
            {state.map(({ id }, index) => {
              return (
                <div
                  key={index}
                  onClick={() => clickSlideDot(id)}
                  className={
                    currentSlide && currentSlide.id === +id
                      ? styles.active_dot
                      : styles.dot
                  }
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
