import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.container_footer}>
        <div className={styles.container_info}>
          <div className={styles.info}>
            <div className={styles.about_company_info}>
              <ul className={styles.company_info}>
                <li>
                  <p id={styles.title}>О компании</p>
                </li>
                <li>
                  <p>О нас</p>
                </li>
                <li>
                  <p>Магазины 05.ru</p>
                </li>
                <li>
                  <p>Вакансии</p>
                </li>
                <li>
                  <p>Оптовикам</p>
                </li>
                <li>
                  <p>Бренды</p>
                </li>
                <li>
                  <p>Каталог</p>
                </li>
                <li>
                  <p>Скидки</p>
                </li>
                <li>
                  <p>Порекомендуй разработчика</p>
                </li>
              </ul>
            </div>
            <div className={styles.help_info}>
              <ul className={styles.company_info}>
                <li>
                  <p id={styles.title}>Помощь</p>
                </li>
                <li>
                  <p>Рассрочка</p>
                </li>
                <li>
                  <p>Кредит</p>
                </li>
                <li>
                  <p>Доставка и оплата</p>
                </li>
                <li>
                  <p>Бонусы</p>
                </li>
                <li>
                  <p>Возврат товара</p>
                </li>
                <li>
                  <p>Как купить</p>
                </li>
                <li>
                  <p>Конфигуратор ПК</p>
                </li>
              </ul>
            </div>
            <div className={styles.busines_info}>
              <ul className={styles.company_info}>
                <li>
                  <p id={styles.title}>Для бизнеса</p>
                </li>
                <li>
                  <p>Бизнес с 05.ru</p>
                </li>
                <li>
                  <p>Поставщикам</p>
                </li>
                <li>
                  <p>Арендодателям</p>
                </li>
                <li>
                  <p>Корпоративным клиентам</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.link_app}>
              <div className={styles.container_links}>
                <div className={styles.app_store}>
                  <span>App Store</span>
                </div>
                <div className={styles.play_market}>
                  <span>Google Play</span>
                </div>
              </div>
            </div>
            <div className={styles.link_social_network}>
              <div className={styles.vkontakte}>
                <p>ВКонтакте</p>
                <span className={styles.subscribe}>42 тыс</span>
              </div>
              <div className={styles.youtube}>
                <p>YouTube</p>
                <span className={styles.subscribe}>230 тыс</span>
              </div>
            </div>
            <div className={styles.link_mail}>
              <div className={styles.contact_05}>
                <div>
                  <p>info@05.ru</p>
                </div>
                <div>
                  <p>corp@05.ru</p>
                </div>
                <div>
                  <p>8 (800) 511-05-05</p>
                </div>
                <div className={styles.container_main_text}>
                  <p id={styles.main_text}>Обратная связь</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.politic}>
          <p>
            2024 © 05.ru Цена на сайте носит информационный характер и не
            является публичной офертой. Пользовательское соглашение, публичная
            оферта, Политика обработки данных. Версия 1.4.112
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
