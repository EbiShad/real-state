
import styles from "@/template/AdminPage.module.css"
import AdminCard from "@/module/AdminCard"

function AdminPage({profiles}) {
  return (
    <div>
     {profiles.length ? null : (<p className={styles.text}>هیچ اگهی در انتظار تاییدی وجود ندارد</p>)}
     {profiles.map( (profile) => <AdminCard key={profile._id} data={JSON.parse(JSON.stringify(profile))}/>)}
    </div>
  )
}

export default AdminPage
