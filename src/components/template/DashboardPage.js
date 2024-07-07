
import styles from "@/template/DashboardPage.module.css"
import { getServerSession } from "next-auth"
import User from "@/models/User"
import connectDB from "@/utiles/connectDB"
import { authOptions } from "@/api/auth/[...nextauth]/route"

async function DashboardPage() {
    await connectDB()
    const session = await getServerSession(authOptions)
    const user = await User.findOne({email:session.user.email})

  return (
    <div className={styles.container}>
      <h3>سلام</h3>
      <p>اگهی های خود را ثبت کنید تا هزاران نفر ان را مشاهده کنند</p>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت شما: <span>{new Date(user.createdAt).toLocaleDateString("fa-IR")}</span> </p>
      </div>
    </div>
  )
}

export default DashboardPage
