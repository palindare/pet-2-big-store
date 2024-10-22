import styles from "./SectionBasketLink.module.css";
import { useState } from "react";

function SectionBasketLink() {
    const [peopleNum,setPeopleNum] = useState("+7");

    const handleChange = (e) => {
        const currentNum = e.target.value
    }
  return (
    <div className={styles.marking}>
      <div className={styles.container_info}>
        <div className={styles.container_title}>
          <span>Данные для связи</span>
        </div>
        <div className={styles.container_forms}>
        <div className={styles.container_form}>
          <div className={styles.name_form}>
            <span>ФИО:</span>
          </div>
          <div className={styles.contact_info}>
            <label htmlFor="Fullname">
              <input id="Fullname" type="text" />
            </label>
          </div>
        </div>
        <div className={styles.container_form}>
          <div className={styles.name_form}>
            <span>Телефон:</span>
          </div>
          <div className={styles.contact_info_number}>
            <label htmlFor="Fullname">
              <input type="text" value={peopleNum} onChange={(e) => handleChange(e)} id="Fullname"/>
            </label>
          </div>
        </div>
        <div className={styles.container_form}>
          <div className={styles.name_form}>
            <span>Email:</span>
          </div>
          <div className={styles.contact_info}>
            <label htmlFor="Fullname">
              <input id="Fullname" type="text" />
            </label>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default SectionBasketLink;
