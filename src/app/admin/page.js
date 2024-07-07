import { redirect } from "next/navigation"
import DashboardSidebar from "src/components/layout/DashboardSidebar"
import connectDB from "@/utiles/connectDB"
import { authOptions } from "@/api/auth/[...nextauth]/route"
import User from "@/models/User"
import { getServerSession } from "next-auth"
import AdminPage from "@/template/AdminPage"
import Profile from "@/models/Profile"



async function Admin() {

  connectDB()
  const session = await getServerSession(authOptions)
  if(!session) redirect("/signin")

  const user = await User.findOne({email:session.user.email})
  if(user.role !== "ADMIN") redirect("/dashboard")

    const profiles = await Profile.find({published:false})
  return (
    
      <DashboardSidebar user={user} email={session.user.email}>
       <AdminPage profiles={profiles}/>
      </DashboardSidebar>
    
  )
}

export default Admin
