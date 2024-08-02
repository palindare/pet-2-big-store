import styles from "./MainMenu.module.css";
import logo_img from "../../images/nav-images/main-menu/main-logo.png";
import CatalogList from "./Catalog-list/CatalogList";
import { useState } from "react";
import { useSelector } from "react-redux";

function MainMenu() {
  const [showCatalog, setShowCatalog] = useState(false);
  const state = useSelector((state) => state.catalogList.catalogList);

  const showListCatalog = () => {
    !showCatalog ? setShowCatalog(true) : setShowCatalog(false);
  };


  return (
    <>
      <div className={styles.container_main_nav}>
        <div className={styles.conteiner_nav}>
          <div className={styles.main_logo}>
            <img src={logo_img} alt="05.ru logo" />
          </div>
          <div className={styles.buttom_arrow}></div>
          <div className={styles.conteiner_catalog}>
            <div
              className={styles.main_catalog}
              onClick={() => showListCatalog()}
            >
              <div
                className={
                  showCatalog
                    ? styles.catalog_products_btn_active
                    : styles.catalog_products_btn
                }
              >
                <div
                  style={{ display: showCatalog ? "block" : "none" }}
                  className={styles.active_catalog}
                ></div>
                <div className={styles.marking_products}>
                  <div className={styles.burger_menu}>
                    <div className={styles.close_list_container}>
                      <span
                        style={{
                          transition: showCatalog ? "all 0.2s" : "none",
                          opacity: showCatalog ? "1" : "0",
                          transform: `rotate(${
                            showCatalog ? "45deg" : "15deg"
                          })`,
                        }}
                        className={styles.close_list1}
                      ></span>
                      <span
                        style={{
                          transition: showCatalog ? "all 0.2s" : "none",
                          opacity: showCatalog ? "1" : "0",
                          transform: `rotate(${
                            showCatalog ? "135deg" : "165deg"
                          })`,
                        }}
                        className={styles.close_list2}
                      ></span>
                    </div>
                    <div className={styles.conteiner_burgers}>
                      <div className={styles.show_animation}>
                        <span
                          style={{
                            top: showCatalog ? "9px" : "4px",
                            transition: showCatalog ? "none" : "all 0.2s ",
                            opacity: showCatalog ? "0" : "1",
                          }}
                          className={styles.burger1}
                        ></span>
                        <span
                          style={{
                            transition: showCatalog ? "none" : "all 0.2s ",
                            opacity: showCatalog ? "0" : "1",
                          }}
                          className={styles.burger2}
                        ></span>
                        <span
                          style={{
                            top: showCatalog ? "9px" : "14px",
                            transition: showCatalog ? "none" : "all 0.2s ",
                            opacity: showCatalog ? "0" : "1",
                          }}
                          className={styles.burger3}
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.catalog_text}>
                    <span>Каталог товаров</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ display: showCatalog ? "block" : "none" }}
              className={styles.catalog_list}
            >
              <CatalogList />
            </div>
          </div>
          <div className={styles.container_search_input}>
            <input type="text" placeholder="Быстрый поиск в Махачкале" />
          </div>
          <div className={styles.start_search_btn}></div>
          <div className={styles.user_items}>
            <div className={styles.phone_info}>
              <div className={styles.phone_number}>
                <span>8 (800) 511-05-05</span>
              </div>
              <div className={styles.social_network}>
                <div className={styles.social_text}>
                  <span>Перезвоните мне</span>
                </div>
                <div className={styles.social_img}>
                  <span className={styles.link_1}>Телеграм</span>
                  <span className={styles.link_2}>WhatsApp</span>
                </div>
              </div>
            </div>
            <div className={styles.user_info}>
              <div className={styles.user_login}>
                <span>Вход или регистрация</span>
              </div>
              <div className={styles.user_panel}>
                <span className={styles.item_1}>Сравнение</span>
                <span className={styles.item_2}>Избранное</span>
              </div>
            </div>
            <div className={styles.basket}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
