import styles from "./SlideCategory.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import fronchise_img from "../images/slide-category/franchise.svg";
import icon05_img from "../images/slide-category/05.ru.jpg";
import { useInView } from "react-intersection-observer";


function SlideCategory() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(500);
  const [moveX, setMoveX] = useState(0);
  const [canSlideMove, setCanSlideMove] = useState(false);
  const [transitionOn, setTransitionOn] = useState(true);
  const canSlidePrevious = currentSlide === 0 ? false : true;
  const canSlideNext = currentSlide === -3.2 ? false : true;
  const state = useSelector((state) => state.slides.slideCategory);
  const changedState = [...state];
  const franchiseObject = {
    name: `Продавайте`,
    lastName: "с 05.ru",
    slider: fronchise_img,
  };
  const appState = {
    name: "Приложение",
    slider: icon05_img,
    advertising: true,
  };


  changedState.splice(1, 0, franchiseObject);
  changedState.splice(changedState.length, 0, appState);

  const previousSlide = () => {
    if (currentSlide === -3.2) {
      setCurrentSlide(-3);
    } else {
      setCurrentSlide((value) => value + 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide === -3) {
      setCurrentSlide(-3.2);
    } else {
      setCurrentSlide((value) => value - 1);
    }
  };

  const MoveSlideNext = currentSlide <= 0

  const updateCurrentSlide = (move) => {
    const newCurrentSlide = Math.trunc(move / 100)
    if (move < 0 && MoveSlideNext) {
      setCurrentSlide(value => Math.max(value + newCurrentSlide, -3.2))
    } else if (move > -3.2) {
      setCurrentSlide(value => Math.min(value + newCurrentSlide, 0))
    }
  }

  const mouseDownSlide = (e) => {
    setCanSlideMove(true);
    setStartX(e.clientX);
  };

  const mouseMoveSlide = (e) => {
    if (canSlideMove) {
      setTransitionOn(false);
      setMoveX(e.clientX - startX);
    }
  };

  const mouseUpSlide = () => {
    setMoveX(0);
    setTransitionOn(true);
    setCanSlideMove(false);
    updateCurrentSlide(moveX)
  };


  return (
    <>
      <div onMouseUp={() => mouseUpSlide()} className={styles.marking_down}>
        <div className={styles.marking}>
          <div className={styles.container_btn}>
            <div
              onMouseDown={(e) => mouseDownSlide(e)}
              onMouseMove={(e) => mouseMoveSlide(e)}
              className={styles.container_slides}
            >
              <div
                style={
                  transitionOn
                    ? {
                        transition: "transform 0.3s",
                        transform: `translateX(${moveX}px)`,
                      }
                    : {
                        transition: "none",
                        transform: `translateX(${moveX}px)`,
                      }
                }
                className={styles.touch_slide}
              >
                {changedState.map(
                  (
                    { slider, name, lastName, newProduct, advertising },
                    index
                  ) => {
                    return (
                      <div
                        key={index}
                        style={{
                          transform: `translateX(${
                            (currentSlide + index) * 135
                          }%)`,
                        }}
                        className={styles.slide}
                      >
                        <div
                          className={
                            !advertising
                              ? styles.category_item_img
                              : styles.category_advertising_img
                          }
                        >
                          <img
                            onDragStart={(e) => e.preventDefault()}
                            src={slider}
                            alt="05 ру категория"
                          />
                        </div>
                        <div className={styles.container_text}>
                          <span className={newProduct ? styles.new_item : ""}>
                            {name}
                          </span>
                          {lastName ? <span> {lastName} </span> : ""}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            {canSlidePrevious ? (
              <div className={styles.previous_slide_container}>
                <div
                  onClick={() => previousSlide()}
                  className={styles.previous_slide_btn}
                ></div>
              </div>
            ) : (
              ""
            )}
            {canSlideNext ? (
              <div className={styles.next_slide_container}>
                <div
                  onClick={() => nextSlide()}
                  className={styles.next_slide_btn}
                ></div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideCategory;
