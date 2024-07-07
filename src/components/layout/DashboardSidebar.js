import styles from "@/layout/DashboardSidebar.module.css";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import LogoutButton from "../module/LogoutButton";


async function DashboardSidebar({ children, user, email }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        <span>{user.role === "ADMIN" ? "admin" : null}</span>
        <p> {email}</p>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profiles">آگهی های من</Link>
        <Link href="/dashboard/add">ثبت اگهی</Link>
        {user.role === "ADMIN" &&  <Link href="/admin">در انتظار تایید</Link>}
        <LogoutButton />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default DashboardSidebar;
