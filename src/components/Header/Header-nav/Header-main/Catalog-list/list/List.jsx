import styles from "./List.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

function List({ currentList }) {
  return (
    <>
      <div className={styles.category_menu}>
        <div className={styles.marking_category}>
        <div className={styles.grid_container}>
          
        {currentList.map(({ lists }) => {
          return (
            <>
              {lists.map(({ id, name, img, menu }) => {
                return (
                  <>
                    <div className={styles.category}>
                        <div className={styles.container_items}>
                          <div className={styles.category_img}>
                            <img src={img} alt="05 ру категория" />
                          </div>
                          <div className={styles.category_name}>
                            <span>{name}</span>
                          </div>
                        </div>
                        <div className={styles.container_lists}>
                          {menu.map((value) => {
                            return (
                              <div className={styles.list}>
                                <span>{value}</span>
                              </div>
                            );
                          })}
                        </div>
                    </div>
                  </>
                );
              })}
            </>
          );
        })}
        </div>
        </div>
      </div>
    </>
  );
}

export default List;
