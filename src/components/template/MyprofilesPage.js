import styles from "@/template/MyprofilesPage.module.css";
import DashboardCard from "@/module/DashboardCard";

function MyprofilesPage({ profiles }) {
  return (
    <div>
      {!profiles.length ? (
        <p className={styles.text}>هنوز آگهی ثبت نشده است</p>
      ) : (
        <div>
          {profiles.map((profile) => (
            <DashboardCard key={profile._id} data={JSON.parse(JSON.stringify(profile))}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyprofilesPage;
