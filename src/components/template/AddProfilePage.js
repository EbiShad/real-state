"use client";

import styles from "@/template/AddProfilePage.module.css";
import { useEffect, useState } from "react";
import TextInput from "@/module/TextInput";
import RadioList from "@/module/RadioList";
import TextList from "@/module/TextList";
import CustomDatePicker from "@/module/CustomDatePicker";
import toast, { Toaster } from "react-hot-toast";
import Loader from "@/module/Loader";
import { useRouter } from "next/navigation";


function AddProfilePage({ profile }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });

  useEffect(() => {
    if (profile) setProfileData(profile);
  }, [profile]);

  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);

    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh()
    }

    setProfileData({
      title: "",
      description: "",
      location: "",
      phone: "",
      price: "",
      realState: "",
      constructionDate: new Date(),
      category: "",
      rules: [],
      amenities: [],
    });
  };

  const editHandler = async() =>{
    setLoading(true);
    const res = await fetch("/api/profile",{
      method:"PATCH",
      body:JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    })
    const data = await res.json();
    setLoading(false);

    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh()
    }
    
  }

  return (
    <div className={styles.container}>
      <h3>{profile ? "ویرایش آگهی" : "ثبت اگهی"}</h3>
      <TextInput
        title="عنوان اگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        profileData={profileData}
        setProfileData={setProfileData}
        title="امکانات رفاهی"
        type="amenities"
      />
      <TextList
        profileData={profileData}
        setProfileData={setProfileData}
        title="قوانین"
        type="rules"
      />
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      {loading ? (
        <Loader />
      ) : profile ? (
        <button onClick={editHandler} className={styles.submit}>ویرایش آگهی</button>
      ) : (
        <button onClick={submitHandler} className={styles.submit}>ثبت آگهی</button>
      )}

      <Toaster />
    </div>
  );
}

export default AddProfilePage;
