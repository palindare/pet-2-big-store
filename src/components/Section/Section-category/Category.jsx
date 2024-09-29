import styles from "./Category.module.css";
import iPhone_img from "../images/category-tabs/iPhone.webp";
import noteBook_img from "../images/category-tabs/notebook.webp";
import printer_img from "../images/category-tabs/printer.webp";
import scooter_img from "../images/category-tabs/scooter.webp";
import conditioner_img from "../images/category-tabs/air-conditioner.webp";
import wahing_img from "../images/category-tabs/washing-machine.webp";
import TV_img from "../images/category-tabs/Television.webp";
import book_img from "../images/category-tabs/book.webp"
import { useSelector,useDispatch } from "react-redux";


function Category() {
  const state = useSelector((state) => state.showBurger.showBurgerMenu);
  const dispatch = useDispatch();
  const hideListCatalog = () => {
    if (state) {
      dispatch({ type: "SETMENU", payload: false });
    }
  }
  return (
    <>
    <div onClick={() => hideListCatalog()}>
      <div  className={styles.container_tabs_category}>
        <div className={styles.marking_grid}>
          <div className={styles.main_tab}>
            <div className={styles.category_container}>
              <div className={styles.category_text}>
                <div className={styles.title_text}>
                  Телефоны и <br /> гаджеты
                </div>
              </div>
              <div className={styles.companies_phones}>
                <div className={styles.all_smartphones}>Все смартфоны</div>
                <div className={styles.phones}>
                  <span>iPhone</span>
                  <span>Samsung</span>
                  <span>Xiaomi</span>
                  <span>TECHNO</span>
                  <span>Infonix</span>
                  <span>Honor</span>
                </div>
              </div>
            </div>
            <div className={styles.category_img}>
              <img src={iPhone_img} alt="05 ру айфон" />
            </div>
          </div>
          <div className={styles.tab}>
            <div className={styles.container_items}>
              <div className={styles.container_text}>
                <div className={styles.tab_text}>
                  Компьютерная <br /> техника
                </div>
              </div>
              <div className={styles.container_img}>
                <div className={styles.img_style}>
                  <img src={noteBook_img} alt="05 ру телевизор" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tab}>
            <div className={styles.container_items}>
              <div className={styles.container_text}>
                <div className={styles.tab_text}>
                  Офисная техника и <br /> сети
                </div>
              </div>
              <div className={styles.container_img}>
                <div className={styles.img_style}>
                  <img src={printer_img} alt="05 ру телевизор" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tab}>
            <div className={styles.container_items}>
              <div className={styles.container_text}>
                <div className={styles.tab_text}>Развлечение и хобби</div>
              </div>
              <div className={styles.container_img}>
                <div className={styles.img_style}>
                  <img src={scooter_img} alt="05 ру телевизор" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tab}>
            <div className={styles.container_items}>
              <div className={styles.container_text}>
                <div className={styles.tab_text}>
                  Климатическая <br /> техника
                </div>
              </div>
              <div className={styles.container_img}>
                <div className={styles.img_style}>
                  <img src={conditioner_img} alt="05 ру телевизор" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tab}>
            <div className={styles.container_items}>
              <div className={styles.container_text}>
                <div className={styles.tab_text}>Бытовая техника</div>
              </div>
              <div className={styles.container_img}>
                <div className={styles.img_style}>
                  <img src={wahing_img} alt="05 ру телевизор" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tab}>
            <div className={styles.container_items}>
              <div className={styles.container_text}>
                <div className={styles.tab_text}>
                  Телевизоры, аудио, <br />
                  видео
                </div>
              </div>
              <div className={styles.container_img}>
                <div className={styles.img_style}>
                  <img src={TV_img} alt="05 ру телевизор" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.end_tab}>
            <div className={styles.container_text_end}>Книги и канцтовары</div>
            <div className={styles.container_img_end}>
              <div className={styles.img_style_end}>
                <img src={book_img} alt="попа" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Category;
