import styles from "@/module/RadioList.module.css";

function RadioList({ profileData, setProfileData }) {
  const { category } = profileData;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className={styles.container}>
      <p>دسته بندی</p>
      <div className={styles.main}>
        <div>
          <label htmlFor="villa">ویلا</label>
          <input
            name="category"
            type="radio"
            id="villa"
            onChange={changeHandler}
            checked={category === "villa"}
            value="villa"
          />
        </div>
        <div>
          <label htmlFor="villa">آپارتمان</label>
          <input
            name="category"
            type="radio"
            id="apartment"
            onChange={changeHandler}
            checked={category === "apartment"}
            value="apartment"
          />
        </div>
        <div>
          <label htmlFor="villa">مغازه</label>
          <input
            name="category"
            type="radio"
            id="store"
            onChange={changeHandler}
            checked={category === "store"}
            value="store"
          />
        </div>
        <div>
          <label htmlFor="villa">دفتر</label>
          <input
            name="category"
            type="radio"
            id="office"
            onChange={changeHandler}
            checked={category === "office"}
            value="office"
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList;
