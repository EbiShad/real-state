import { getServerSession } from "next-auth"
import DashboardSidebar from "src/components/layout/DashboardSidebar"
import { authOptions } from "@/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import User from "@/models/User"
import connectDB from "@/utiles/connectDB"



async function Dashboardlayout({children}){

  const session = await getServerSession(authOptions)
  if(!session) redirect("/signin")

  connectDB()
  const user = await User.findOne({email:session.user.email})

  if(!user) return <h3>مشکلی پیش امده است</h3>
  return (
    <DashboardSidebar user={user} email={session.user.email}>
      {children}
    </DashboardSidebar>
  )
}

export default Dashboardlayout
