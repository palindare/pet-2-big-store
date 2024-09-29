import styles from "./List.module.css";
import Brand from "./Brand/Brand";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function List({ currentId }) {
  const currentList = useSelector((state) => state.catalogList.catalogList);
  const [currentData, setCurrentData] = useState([]);
  useEffect(() => {
    const filteredArr = currentList.filter(({ id }) => id === currentId);
    filteredArr.forEach(({ lists }) => lists.map((value) => (value.show = 10)));
    setCurrentData(filteredArr);
  }, [currentList, currentId]);

  const funcCalc = (currentId) => {
    const fixData = currentData.map((value) =>
      value.lists.map((data) => {
        if (data.id === currentId) {
          data.show = 100;
          return value;
        }
      })
    );

    const updateData = fixData.flat(2).filter((value) => value !== undefined);
    setCurrentData(updateData);
  };

  return (
    <>
      <div className={styles.category_menu}>
        <div className={styles.menu}>
          <div className={styles.menu_left}></div>
          <div
            style={{
              paddingRight: currentData.map(({brand}) => brand !== false ? "200px" : "18px"),
            }}
            className={styles.marking_category}
          >
            <div style={{gridTemplateColumns: currentData.map(({brand}) => brand !== false ? "repeat(3,260px)" : "repeat(3,240px)")}} className={styles.grid_container}>
              {currentData.map(({ lists }) => {
                return (
                  <>
                    {lists.map(({ id, name, img, menu, show }) => {
                      return (
                        <>
                          <div key={`${id}-${name}`} className={styles.category}>
                            <div
                              style={{
                                marginBottom: menu !== false ? "0" : "27px",
                                marginTop: menu !== false ? "0" : "3px",
                                width: currentData.map(({brand}) => brand !== false ? "260px" : "216px")
                              }}
                              className={styles.category_margin}
                            >
                              <div className={styles.container_items}>
                                <div className={styles.category_img}>
                                  <img src={img} alt="05 ру категория" />
                                </div>
                                <div className={styles.category_name}>
                                  <span>{name}</span>
                                </div>
                              </div>
                              <div className={styles.conteiner_catalog}>
                                <div
                                  style={{
                                    display: menu !== false ? "flex" : "none",
                                    width: currentData.map(({brand}) => brand !== false ? "190px" : "176px")
                                  }}
                                  className={styles.container_lists}
                                >
                                  {menu !== false
                                    ? menu.slice(0, show).map((value,index) => {
                                        return (
                                          <div key={`${id}-${index}`} className={styles.list}>
                                            <span>{value}</span>
                                          </div>
                                        );
                                      })
                                    : ""}
                                  {menu.length > 10 ? (
                                    <div className={styles.container_show_more}>
                                      <span
                                        className={styles.show_more}
                                        style={{
                                          display:
                                            show === 10 ? "flex" : "none",
                                        }}
                                        onClick={() => funcCalc(id)}
                                      >
                                        Показать всё
                                      </span>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </div>
            <div className={styles.container_brand}>
              <Brand currentList={currentData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
