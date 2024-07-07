"use client"

import { signOut } from "next-auth/react"
import styles from "@/module/LogoutButton.module.css"
import { FiLogOut } from "react-icons/fi"



function LogoutButton() {

  const signoutHandler = async () => {
    await signOut()
  }

  return (
    <button onClick={signoutHandler} className={styles.button}>
     <FiLogOut/>
     خروج
    </button>
  )
}

export default LogoutButton
