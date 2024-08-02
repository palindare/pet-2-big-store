import styles from "./CatalogList.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import List from "./list/List";

function CatalogList() {
  const state = useSelector((state) => state.catalogList.catalogList);
  const [newId, setNewId] = useState(1);

  const setActiveTab = (currentId) => {
    setNewId(currentId);
  };

  const currentList = () => {
    const result = state.filter(({id}) => newId === id)
    return result
  }

  currentList()

  return (
    <>
      <div className={styles.main_list}>
        <div className={styles.marking_list}>
          {state.map(({ img, name, id }, index) => {
            return (
              <div
                onMouseOver={() => setActiveTab(id)}
                key={index}
                className={styles.container_category}
              >
                <div
                  style={{
                    backgroundColor: newId === id ? "#fffce0" : "white",
                    transition: newId === id ? "background 0.2s" : "none",
                  }}
                  className={newId === id ? styles.active_tab : styles.tab}
                >
                  <div className={styles.tab_img}>
                    <img src={img} alt="05.ru картинка" />
                  </div>
                  <div className={styles.tab_text}>
                    <span>{name}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.container_list}>
          <List currentList={currentList()} />
        </div>
      </div>
    </>
  );
}

export default CatalogList;
