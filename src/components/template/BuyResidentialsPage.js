import styles from "@/template/BuyResidentialsPage.module.css";
import Card from "@/module/Card";
import Sidebar from "@/module/Sidebar";

function BuyResidentialsPage({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar/>
      </div>
      <div className={styles.main}>
       {data.length ? null : (<p className={styles.text}>هنوز آکهی وجود ندارد</p>)}
       {data.map((profile) => (<Card key={profile._id} data={profile}/>))}
      </div>
    </div>
  );
}

export default BuyResidentialsPage;
