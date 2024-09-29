  import styles from "./Brand.module.css";

  function Brand({currentList}) {
    return (
      <>  
        {currentList.map(({ brand }) => {
          return (
            <>
              {brand !== false ? brand.map((value,index) => {
                return (
                  <>
                  <div key={`${index}-${value}`} className={styles.brand_img}>
                    <img src={value} alt="05 ру" />
                  </div>
                  </>
                );
              }) : ""}
            </>
          );
        })}
      </>
    );
  }

  export default Brand;
