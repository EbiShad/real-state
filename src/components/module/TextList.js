import { MdOutlineLibraryAdd } from "react-icons/md";
import styles from "@/module/TextList.module.css";


function TextList({ profileData, setProfileData, title, type }) {

  const addHandler = () => {
    setProfileData({...profileData,[type]:[...profileData[type],""]})
    console.log(profileData)
  };
  const deleteHandler = (index) => {
    const list = [...profileData[type]]
    list.splice(index,1)
    setProfileData({...profileData,[type]:list})
  };

  const changeHandler = (e,index) => {
    const {value} = e.target
    const list = [...profileData[type]]
    list[index] = value
    setProfileData({...profileData,[type]:list})
  }

  return (
    <div className={styles.container}>
      <p>{title}</p>
      {profileData[type].map((i,index) => (
        <div className={styles.card} key={index}>
          <input
            type="text"
            value={i}
            onChange={(e) => changeHandler(e,index)}
          />
          <button onClick={()=> deleteHandler(index)}>حذف</button>
        </div>  
      ))}
      <button onClick={addHandler}>افزودن <MdOutlineLibraryAdd/></button>
    </div>
  );
}

export default TextList;

