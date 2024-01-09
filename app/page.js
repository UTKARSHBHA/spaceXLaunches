"use client";


import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import style from "./style.module.css"


export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-44 h-44 relative mb-4">
        {/* <Image
          src={session.user?.image}
          fill
          alt=""
          className="object-cover rounded-full"
        /> */}
        </div>
        <p className="text-2xl mb-2">Welcome <span className="font-bold">{session.user?.name}</span>. Signed In As</p>
        <p className="font-bold mb-4">{session.user?.email}</p>
        <button className="bg-red-600 py-2 px-6 rounded-md" onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }

  return (
    <div className={style.signInContainer}>
        <p className={style.signUptext}>Not Signed In</p>
        <button className={style.githubBtn} onClick={() => signIn('github')}>Sign in with github</button>
    </div>
  )

}