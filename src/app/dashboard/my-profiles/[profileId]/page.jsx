import AddProfilePage from "src/components/template/AddProfilePage";
import connectDB from "@/utiles/connectDB";
import Profile from "@/models/Profile";

async function Edit(props) {
  const {
    params: { profileId },
  } = props;

  await connectDB();
  const profile = await Profile.findOne({_id:profileId})

  if(!profile) return <h3>مشکلی پیش امده لطفا دوباره امتحان کنید</h3>

  return (
    <div>
      <AddProfilePage profile={JSON.parse(JSON.stringify(profile))}/>
    </div>
  );
}

export default Edit;
