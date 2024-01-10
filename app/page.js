"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import styles from "./style.module.css";
import LaunchList from "@/components/LaunchList";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={session.user?.image}
            width={150}
            height={150}
            alt=""
            className={styles.profileImage}
          />
        </div>
        <p className={styles.welcomeText}>
          Welcome <span className={styles.boldText}>{session.user?.name}</span>.
          Signed In As
        </p>
        <p className={styles.emailText}>{session.user?.email}</p>
        <button className={`${styles.signOutButton}`} onClick={() => signOut()}>
          Sign out
        </button>
        <LaunchList />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <p className={styles.signInText}>Not Signed In</p>
      <button
        className={`${styles.githubButton}`}
        onClick={() => signIn("github")}
      >
        Sign in with GitHub
      </button>
    </div>
  );
}
