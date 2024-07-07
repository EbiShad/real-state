import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import User from "src/models/User";
import connectDB from "@/utiles/connectDB";
import MyprofilesPage from "@/template/MyprofilesPage";

async function Myprofiles() {
  await connectDB;
  const session = await getServerSession(authOptions);
  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
 
  return <div><MyprofilesPage profiles={user.profiles} /></div>;
}

export default Myprofiles;
