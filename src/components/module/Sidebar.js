import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import styles from "@/module/Sidebar.module.css";
import { categories } from "@/constants/strings";

function Sidebar() {

  const queries = [categories]

  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {Object.keys(categories).map((i, index) => (
        <Link
          key={index}
          href={
            ({ pathname: "buy-residential" },
            { query: { category:i } })
          }
        >{categories[i]}</Link>
      ))}
    </div>
  );
}

export default Sidebar;
