"use client";

import styles from "@/template/SignupPage.module.css";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "@/module/Loader";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();
    
    if (!password || !rePassword || !email) {
      toast.error("لطفا تمامی اطلاعات را وارد کنید");
      return;
    }
    if (password !== rePassword) {
      toast.error("کد عبور و تکرار ان برابر نیست");
      return;
    }
    setLoading(true);
    // const res = await fetch("/api/auth/signup", {
    //   method: "POST",
    //   body: JSON.stringify({ email, password }),
    //   headers: { "Content-Type": "application/json" },
    // });

    const {data} = await axios
      .post(
        "/api/auth/signup",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      )

    // console.log(data)
    // const data = await res.json();
    setLoading(false);
    if (data.status === 201) {
      toast.success(data.message);
      router.push("/signin");
    } else {
      toast.error(data.error);
    }
  };

  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
      <form>
        <label>ایمیل:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>رمز ورود:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>تکرار رمز ورود:</label>
        <input
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />

        {loading ? <Loader/> : (
          <button type="submit" onClick={signupHandler}>
            ثبت نام
          </button>
        )}
      </form>

      <p>
        حساب کاربری دارید؟
        <Link href="/signin">ورود</Link>
      </p>
      <Toaster position="top-left" />
    </div>
  );
}

export default SignupPage;
