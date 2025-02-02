import styles from "@/module/TextInput.module.css";
import { p2e } from "@/utiles/replaceNumber";

function TextInput({
  name,
  title,
  profileData,
  setProfileData,
  textarea = false,
}) {
  const changeHandler = (e) => {
    const {name,value} = e.target
    setProfileData({...profileData,[name]:p2e(value)})
  };

  return (
    <div className={styles.container}>
      <p>{title}</p>
      {textarea ? (
        <textarea
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}

export default TextInput;
