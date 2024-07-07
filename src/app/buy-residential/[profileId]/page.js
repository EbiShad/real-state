import connectDB from "@/utiles/connectDB";
import Profile from "@/models/Profile";
import DetailsPage from "@/template/DetailsPage";

async function ProfileDetails({ params: { profileId } }) {
  await connectDB();

  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) return <h3>مشکلی پیش امده است</h3>;

  return (
    <div>
      <DetailsPage data={profile} />
    </div>
  );
}

export default ProfileDetails;
