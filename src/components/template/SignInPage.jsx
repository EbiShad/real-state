"use client";

import styles from "@/template/SignupPage.module.css";
import {signIn} from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signInHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials",{email,password,redirect:false})

    setLoading(false);
    if (res.error) {
      toast.error(res.error);
      
    } else {
      router.push("/");
    }
  };

  return (
    <div className={styles.form}>
      <h4>فرم ورود</h4>
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

        {loading ? (
          <RotatingLines
            visible={true}
            height="40"
            width="40"
            color="#304ffe"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{ margin: "auto" }}
            wrapperClass=""
          />
        ) : (
          <button type="submit" onClick={signInHandler}>
            ورود
          </button>
        )}
      </form>

      <p>
        حساب کاربری نذارید؟ 
        <Link href="/signup">ثبت نام</Link>
      </p>
      <Toaster position="top-left" />
    </div>
  );
}

export default SignInPage;
