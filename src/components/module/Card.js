import styles from "@/module/Card.module.css";
import {RiHome3Line} from "react-icons/ri"
import {MdApartment} from "react-icons/md"
import {BiLeftArrowAlt, BiStore} from "react-icons/bi"
import {GiOfficeChair} from "react-icons/gi"
import { CiLocationOn } from "react-icons/ci";
import { sp } from "@/utiles/replaceNumber";
import Link from "next/link";


function Card({ data: { category, title, location, price ,_id} }) {

  const icons = {
    villa:<RiHome3Line/>,
    apartment:<MdApartment/>,
    store:<BiStore/>,
    office:<GiOfficeChair/>
  }

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}> <CiLocationOn/> {location} </p>
      <span>{sp(price)} تومان</span>
      <Link href={`/buy-residential/${_id}`}>مشاهده اگهی <BiLeftArrowAlt /></Link>
    </div>
  )
}

export default Card;
