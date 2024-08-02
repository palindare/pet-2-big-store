import styles from "./SubMenu.module.css";

function SubMenu() {
    return (
    <div className={styles.header_container_menu}>
        <div className={styles.border_city_link}>
          <span>Махачкала</span>
        </div>
        <div className={styles.menu_list_container}>
          <ul className={styles.menu_list}>
            <li>Магазины</li>
            <li>Доставка и оплата</li>
            <li>Условия возврата</li>
            <li><span className={styles.bonus_text}>Бонусы</span></li>
            <li>Акции</li>
            <li>Бренды</li>
            <li>Бизнес с 05.ru</li>
            <div className={styles.vacancies_container}>
              <span>Вакансии</span>
            </div>
          </ul>
        </div>
      </div>
    )
}

export default SubMenu;
